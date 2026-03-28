"use client";

import React, { Suspense, useState, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, ContactShadows, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, BookOpen, Star, Lock, ChevronRight, X, Cloud as CloudIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LessonType } from '@/lib/curriculum';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

const Ocean = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1 - 2.5;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial 
                color="#0ea5e9" 
                transparent 
                opacity={0.6} 
                roughness={0.1}
                metalness={0.1}
            />
        </mesh>
    );
};

const Cloud = ({ position }: { position: [number, number, number] }) => {
    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
            <group scale={0.5}>
                <mesh castShadow>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[1, 0, 0]} castShadow>
                    <sphereGeometry args={[0.7, 8, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.8, -0.2, 0]} castShadow>
                    <sphereGeometry args={[0.6, 8, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>
        </Float>
    );
};

const Island = ({ position, unit, status, onClick }: { 
    position: [number, number, number], 
    unit: Unit, 
    status: 'completed' | 'current' | 'locked',
    onClick: () => void 
}) => {
    const isCompleted = status === 'completed';
    const isCurrent = status === 'current';
    
    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
                {/* Grass Layer */}
                <mesh receiveShadow castShadow onClick={(e) => { e.stopPropagation(); onClick(); }}>
                    <cylinderGeometry args={[2.2, 2.2, 0.4, 6]} />
                    <meshStandardMaterial 
                        color={isCompleted ? "#4ade80" : isCurrent ? "#86efac" : "#cbd5e1"} 
                    />
                </mesh>
                {/* Soil Layer */}
                <mesh position={[0, -0.4, 0]} receiveShadow castShadow>
                    <cylinderGeometry args={[2.2, 1.8, 0.8, 6]} />
                    <meshStandardMaterial color="#78350f" />
                </mesh>
                
                {/* LANDMARKS */}
                <group position={[0, 0.5, 0]}>
                    {unit.id % 5 === 1 && ( // RED HOUSE
                        <group>
                            <mesh position={[0, 0.4, 0]} castShadow>
                                <boxGeometry args={[1, 0.8, 1]} />
                                <meshStandardMaterial color="#fca5a5" />
                            </mesh>
                            <mesh position={[0, 1, 0]} castShadow rotation={[0, Math.PI / 4, 0]}>
                                <coneGeometry args={[1, 0.6, 4]} />
                                <meshStandardMaterial color="#ef4444" />
                            </mesh>
                        </group>
                    )}
                    
                    {unit.id % 5 === 2 && ( // CAFE / SHOP
                        <group>
                            <mesh position={[0, 0.4, 0]} castShadow>
                                <boxGeometry args={[1.2, 0.8, 1]} />
                                <meshStandardMaterial color="#bae6fd" />
                            </mesh>
                            <mesh position={[0, 0.8, 0.4]} castShadow rotation={[-Math.PI / 6, 0, 0]}>
                                <planeGeometry args={[1.4, 0.6]} />
                                <meshStandardMaterial color="#f43f5e" side={THREE.DoubleSide} />
                            </mesh>
                        </group>
                    )}

                    {unit.id % 5 === 3 && ( // CASTLE TOWER
                        <group>
                            <mesh position={[0, 0.8, 0]} castShadow>
                                <cylinderGeometry args={[0.5, 0.5, 1.6, 8]} />
                                <meshStandardMaterial color="#94a3b8" />
                            </mesh>
                            <mesh position={[0, 1.8, 0]} castShadow>
                                <coneGeometry args={[0.7, 0.5, 8]} />
                                <meshStandardMaterial color="#475569" />
                            </mesh>
                        </group>
                    )}

                    {unit.id % 5 === 4 && ( // ARCHWAY
                        <group rotation={[0, Math.PI / 4, 0]}>
                            <mesh position={[-0.5, 0.6, 0]} castShadow>
                                <boxGeometry args={[0.3, 1.2, 0.3]} />
                                <meshStandardMaterial color="#fbbf24" />
                            </mesh>
                            <mesh position={[0.5, 0.6, 0]} castShadow>
                                <boxGeometry args={[0.3, 1.2, 0.3]} />
                                <meshStandardMaterial color="#fbbf24" />
                            </mesh>
                            <mesh position={[0, 1.2, 0]} castShadow>
                                <boxGeometry args={[1.4, 0.3, 0.3]} />
                                <meshStandardMaterial color="#fbbf24" />
                            </mesh>
                        </group>
                    )}

                    {unit.id % 5 === 0 && ( // LIGHTHOUSE
                        <group>
                            <mesh position={[0, 1, 0]} castShadow>
                                <cylinderGeometry args={[0.3, 0.6, 2, 8]} />
                                <meshStandardMaterial color="white" />
                            </mesh>
                            <mesh position={[0, 2, 0]} castShadow>
                                <sphereGeometry args={[0.3, 8, 8]} />
                                <meshStandardMaterial color="#fef08a" emissive="#fef08a" emissiveIntensity={0.5} />
                            </mesh>
                        </group>
                    )}

                    {/* ALWAYS A TREE ON THE SIDE */}
                    <group position={[1.2, 0.3, 0.8]} scale={0.6}>
                        <mesh castShadow>
                            <cylinderGeometry args={[0.1, 0.1, 0.6, 8]} />
                            <meshStandardMaterial color="#451a03" />
                        </mesh>
                        <mesh position={[0, 0.5, 0]} castShadow>
                            <sphereGeometry args={[0.4, 8, 8]} />
                            <meshStandardMaterial color="#166534" />
                        </mesh>
                    </group>
                </group>

                {/* Status Indicator */}
                {isCurrent && (
                    <group position={[0, 3, 0]}>
                        <mesh>
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshBasicMaterial color="#6366f1" />
                        </mesh>
                        <pointLight color="#6366f1" intensity={1} distance={5} />
                    </group>
                )}
            </Float>
        </group>
    );
};

const EnergyPath = ({ points }: { points: THREE.Vector3[] }) => {
    return (
        <group>
            {points.map((p, i) => (
                i < points.length - 1 && (
                    <mesh key={i} position={[(p.x + points[i+1].x)/2, (p.y + points[i+1].y)/2 - 0.2, (p.z + points[i+1].z)/2]}>
                        <boxGeometry args={[0.2, 0.05, 6]} />
                        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.3} transparent opacity={0.6} />
                    </mesh>
                )
            ))}
        </group>
    );
};

export const Map3DView = ({ units, currentProgress, allLessonsUnlocked, getLessonRoute, getLessonDescription }: Map3DViewProps) => {
    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

    const islandData = useMemo(() => {
        if (!units || units.length === 0) return [];
        return units.map((unit, index) => {
            const x = Math.sin(index * 1.5) * 5;
            const z = index * -8;
            const y = 0;

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
        <div className="relative w-full h-[65vh] rounded-[3.5rem] overflow-hidden bg-gradient-to-b from-sky-300 to-sky-500 border-8 border-white/30 shadow-2xl">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [12, 12, 12], fov: 40 }}>
                <OrbitControls 
                    enablePan={true} 
                    enableZoom={true} 
                    maxPolarAngle={Math.PI / 2.3}
                    minDistance={10}
                    maxDistance={40}
                    target={[0, 0, -8]}
                />
                
                <Suspense fallback={<Html center><div className="flex flex-col items-center gap-4 text-white font-black"><div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />Dünya Yükleniyor...</div></Html>}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[20, 30, 10]} intensity={1.5} castShadow />
                    <hemisphereLight args={["#ffffff", "#0ea5e9", 0.5]} />
                    
                    <group>
                        {islandData.map((data) => (
                            <Island 
                                key={data.unit.id}
                                position={data.position}
                                unit={data.unit}
                                status={data.status}
                                onClick={() => setSelectedUnit(data.unit)}
                            />
                        ))}
                        <EnergyPath points={pathPoints} />
                    </group>

                    <Ocean />
                    <Cloud position={[-10, 5, -10]} />
                    <Cloud position={[8, 7, -20]} />
                    <Cloud position={[-5, 4, -30]} />
                    <Cloud position={[12, 6, 5]} />

                    <ContactShadows position={[0, -2.4, 0]} opacity={0.3} scale={60} blur={2.5} far={10} />
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
                        <div className="bg-white/95 backdrop-blur-2xl w-full max-w-sm rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/50 p-8 pointer-events-auto relative">
                            <button 
                                onClick={() => setSelectedUnit(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-400" />
                            </button>

                            <div className="mb-6">
                                <span className={cn(
                                    "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-3 inline-block",
                                    "bg-indigo-100 text-indigo-700 shadow-sm"
                                )}>
                                    Ünite {selectedUnit.id}
                                </span>
                                <h2 className="text-3xl font-black text-slate-800 leading-tight mb-2">{selectedUnit.title}</h2>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{selectedUnit.description}</p>
                            </div>

                            <div className="space-y-3 max-h-[35vh] overflow-y-auto pr-2 no-scrollbar">
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
                                                    : "bg-slate-50 border-transparent hover:border-indigo-400 hover:bg-white hover:shadow-lg"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={cn(
                                                    "w-11 h-11 rounded-1.5xl flex items-center justify-center transition-transform group-hover:scale-110",
                                                    isCompleted ? "bg-emerald-500 text-white" : "bg-white text-slate-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white"
                                                )}>
                                                    <Play className="w-5 h-5 ml-0.5" />
                                                </div>
                                                <div>
                                                    <p className="font-extrabold text-slate-700 text-sm leading-none mb-1">{getLessonDescription(lesson.type)}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ders {idx + 1}</p>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-indigo-50 transition-colors">
                                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            <Button 
                                onClick={() => setSelectedUnit(null)}
                                className="w-full mt-8 h-16 rounded-2xl font-black text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Kapat
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instruction Overlay */}
            <div className="absolute top-8 left-8 pointer-events-none">
                <div className="bg-white/30 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/40 text-white text-[11px] font-black flex items-center gap-3 shadow-xl">
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    KEŞFETMEK İÇİN SÜRÜKLE
                </div>
            </div>
        </div>
    );
};
