"use client";

import React, { Suspense, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Text, Environment, ContactShadows, PresentationControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, BookOpen, Star, Lock, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LessonType } from '@/lib/curriculum';

// --- TYPES ---
interface Lesson {
    id: number;
    type: LessonType;
}

interface Unit {
    id: number;
    title: string;
    description: string;
    lessons: Lesson[];
    color: string;
}

interface Map3DViewProps {
    units: Unit[];
    currentProgress: { completedLessons: number[] } | undefined;
    allLessonsUnlocked: boolean;
    getLessonRoute: (type: string, unitId: number, lessonIndex: number, lessons: any[]) => string;
    getLessonDescription: (type: LessonType) => string;
}

// --- 3D COMPONENTS ---

const Island = ({ position, color, unit, status, onClick }: { 
    position: [number, number, number], 
    color: string, 
    unit: Unit, 
    status: 'completed' | 'current' | 'locked',
    onClick: () => void 
}) => {
    const isCompleted = status === 'completed';
    const isCurrent = status === 'current';
    
    // Low-poly island base
    return (
        <group position={position}>
            {/* Island Base */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh receiveShadow castShadow onClick={(e) => { e.stopPropagation(); onClick(); }}>
                    <cylinderGeometry args={[2.5, 3, 1, 6]} />
                    <meshStandardMaterial 
                        color={isCompleted ? "#4ade80" : isCurrent ? "#6366f1" : "#94a3b8"} 
                        roughness={0.8}
                    />
                </mesh>
                
                {/* Visual Marker / Landmark based on Unit ID */}
                <group position={[0, 1, 0]}>
                    {unit.id % 5 === 1 && ( // House
                        <mesh castShadow>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="#fca5a5" />
                        </mesh>
                    )}
                    {unit.id % 5 === 2 && ( // Tree
                        <group>
                            <mesh position={[0, 0.5, 0]} castShadow>
                                <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
                                <meshStandardMaterial color="#78350f" />
                            </mesh>
                            <mesh position={[0, 1.2, 0]} castShadow>
                                <coneGeometry args={[0.8, 1.5, 8]} />
                                <meshStandardMaterial color="#166534" />
                            </mesh>
                        </group>
                    )}
                    {unit.id % 5 === 3 && ( // Tower
                        <mesh castShadow>
                            <cylinderGeometry args={[0.5, 0.7, 2.5, 8]} />
                            <meshStandardMaterial color="#cbd5e1" />
                        </mesh>
                    )}
                    {unit.id % 5 === 4 && ( // Arch
                        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
                            <torusGeometry args={[0.8, 0.2, 8, 16, Math.PI]} />
                            <meshStandardMaterial color="#fbbf24" />
                        </mesh>
                    )}
                    {unit.id % 5 === 0 && ( // Pyramid
                        <mesh castShadow>
                            <coneGeometry args={[1, 1.5, 4]} />
                            <meshStandardMaterial color="#f59e0b" />
                        </mesh>
                    )}
                </group>

                {/* Legend Text */}
                <Text
                    position={[0, -1, 0]}
                    fontSize={0.4}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/Inter-Bold.woff" // Adjust if needed
                >
                    {`Unit ${unit.id}`}
                </Text>
            </Float>
        </group>
    );
};

const Path = ({ points }: { points: THREE.Vector3[] }) => {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
    const geometry = useMemo(() => new THREE.TubeGeometry(curve, 64, 0.1, 8, false), [curve]);

    return (
        <mesh geometry={geometry}>
            <meshStandardMaterial color="#e2e8f0" opacity={0.5} transparent />
        </mesh>
    );
};

export const Map3DView = ({ units, currentProgress, allLessonsUnlocked, getLessonRoute, getLessonDescription }: Map3DViewProps) => {
    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

    // Generate positions for islands in a winding path
    const islandData = useMemo(() => {
        return units.map((unit, index) => {
            const x = Math.sin(index * 1.5) * 5;
            const z = index * -8;
            const y = Math.cos(index * 0.5) * 1;

            const completedLessonCount = unit.lessons.filter(l => currentProgress?.completedLessons.includes(l.id)).length;
            const isCompleted = completedLessonCount === unit.lessons.length;
            const isLocked = !allLessonsUnlocked && !isCompleted && index > 0 &&
                        !units[index - 1].lessons.every(l => currentProgress?.completedLessons.includes(l.id));
            const isCurrent = !isCompleted && !isLocked;

            return {
                unit,
                position: [x, y, z] as [number, number, number],
                status: (isCompleted ? 'completed' : isCurrent ? 'current' : 'locked') as 'completed' | 'current' | 'locked'
            };
        });
    }, [units, currentProgress, allLessonsUnlocked]);

    const pathPoints = useMemo(() => islandData.map(d => new THREE.Vector3(...d.position)), [islandData]);

    return (
        <div className="relative w-full h-[70vh] rounded-[3rem] overflow-hidden bg-gradient-to-b from-sky-400 to-indigo-900 shadow-inner">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={50} />
                <OrbitControls 
                    enablePan={true} 
                    enableZoom={true} 
                    maxPolarAngle={Math.PI / 2.1} 
                    minDistance={5}
                    maxDistance={50}
                    target={[0, 0, -10]}
                />
                
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                    
                    <group>
                        {islandData.map((data, i) => (
                            <Island 
                                key={data.unit.id}
                                position={data.position}
                                color={data.unit.color}
                                unit={data.unit}
                                status={data.status}
                                onClick={() => setSelectedUnit(data.unit)}
                            />
                        ))}
                        <Path points={pathPoints} />
                    </group>

                    <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={40} blur={2} far={10} />
                </Suspense>
            </Canvas>

            {/* UI OVERLAY - Popover for selected unit */}
            <AnimatePresence>
                {selectedUnit && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
                    >
                        <div className="bg-white/95 backdrop-blur-xl w-full max-w-sm rounded-[2.5rem] shadow-2xl border border-white/20 p-8 pointer-events-auto relative">
                            <button 
                                onClick={() => setSelectedUnit(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-400" />
                            </button>

                            <div className="mb-6">
                                <span className="text-xs font-black px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full uppercase tracking-widest mb-2 inline-block">
                                    Ünite {selectedUnit.id}
                                </span>
                                <h2 className="text-3xl font-black text-slate-800 leading-tight">{selectedUnit.title}</h2>
                                <p className="text-slate-500 font-medium mt-2">{selectedUnit.description}</p>
                            </div>

                            <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 no-scrollbar">
                                {selectedUnit.lessons.map((lesson, idx) => {
                                    const isCompleted = currentProgress?.completedLessons.includes(lesson.id);
                                    return (
                                        <Link 
                                            key={lesson.id}
                                            href={getLessonRoute(lesson.type, selectedUnit.id, idx, selectedUnit.lessons)}
                                            className={cn(
                                                "flex items-center justify-between p-4 rounded-2xl border-2 transition-all group",
                                                isCompleted 
                                                    ? "bg-emerald-50 border-emerald-100 opacity-80" 
                                                    : "bg-white border-slate-100 hover:border-indigo-400 hover:shadow-md"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={cn(
                                                    "w-10 h-10 rounded-xl flex items-center justify-center",
                                                    isCompleted ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-indigo-500 group-hover:text-white"
                                                )}>
                                                    <Play className="w-5 h-5 ml-1" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-700 text-sm">{getLessonDescription(lesson.type)}</p>
                                                    <p className="text-xs text-slate-400">Ders {idx + 1}</p>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    );
                                })}
                            </div>

                            <Button 
                                onClick={() => setSelectedUnit(null)}
                                className="w-full mt-6 h-14 rounded-2xl font-black text-lg shadow-lg shadow-indigo-200"
                            >
                                Kapat
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instruction Overlay */}
            <div className="absolute top-6 left-6 pointer-events-none">
                <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/90 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Haritada gezinmek için dokun ve sürükle
                </div>
            </div>
        </div>
    );
};

import { Button } from '@/components/ui/button';
import Link from 'next/link';
