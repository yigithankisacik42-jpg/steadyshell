"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Play, Check, Lock, X, Award, Zap, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ===== ŞEHİR KOORDİNATLARI (30 ÜNİTE İÇİN DETAYLI LİSTE) =====
const CITY_COORDINATES: Record<string, { name: string; lat: number; lon: number }[]> = {
    fr: [
        { name: "Paris", lat: 48.8566, lon: 2.3522 },
        { name: "Versailles", lat: 48.8014, lon: 2.1301 },
        { name: "Lille", lat: 50.6292, lon: 3.0573 },
        { name: "Rouen", lat: 49.4432, lon: 1.0999 },
        { name: "Reims", lat: 49.2583, lon: 4.0317 },
        { name: "Strasbourg", lat: 48.5734, lon: 7.7521 },
        { name: "Colmar", lat: 48.0794, lon: 7.3585 },
        { name: "Dijon", lat: 47.3220, lon: 5.0415 },
        { name: "Lyon", lat: 45.7640, lon: 4.8357 },
        { name: "Grenoble", lat: 45.1885, lon: 5.7245 },
        { name: "Nice", lat: 43.7102, lon: 7.2620 },
        { name: "Cannes", lat: 43.5528, lon: 7.0174 },
        { name: "Marseille", lat: 43.2965, lon: 5.3698 },
        { name: "Aix-en-Provence", lat: 43.5297, lon: 5.4474 },
        { name: "Toulon", lat: 43.1242, lon: 5.9280 },
        { name: "Montpellier", lat: 43.6108, lon: 3.8767 },
        { name: "Nîmes", lat: 43.8367, lon: 4.3601 },
        { name: "Toulouse", lat: 43.6047, lon: 1.4442 },
        { name: "Carcassonne", lat: 43.2122, lon: 2.3537 },
        { name: "Bordeaux", lat: 44.8378, lon: -0.5792 },
        { name: "La Rochelle", lat: 46.1603, lon: -1.1511 },
        { name: "Nantes", lat: 47.2184, lon: -1.5536 },
        { name: "Rennes", lat: 48.1173, lon: -1.6778 },
        { name: "Brest", lat: 48.3904, lon: -4.4861 },
        { name: "Saint-Malo", lat: 48.6493, lon: -2.0260 },
        { name: "Caen", lat: 49.1829, lon: -0.3707 },
        { name: "Le Havre", lat: 49.4944, lon: 0.1079 },
        { name: "Tours", lat: 47.3941, lon: 0.6848 },
        { name: "Orléans", lat: 47.9030, lon: 1.9093 },
        { name: "Ajaccio (Corsica)", lat: 41.9272, lon: 8.7346 }
    ],
    es: [
        { name: "Madrid", lat: 40.4168, lon: -3.7038 },
        { name: "Toledo", lat: 39.8628, lon: -4.0273 },
        { name: "Segovia", lat: 40.9429, lon: -4.1088 },
        { name: "Ávila", lat: 40.6565, lon: -4.6818 },
        { name: "Salamanca", lat: 40.9701, lon: -5.6635 },
        { name: "Valladolid", lat: 41.6523, lon: -4.7245 },
        { name: "León", lat: 42.5987, lon: -5.5671 },
        { name: "Santiago de Compostela", lat: 42.8782, lon: -8.5448 },
        { name: "Vigo", lat: 42.2406, lon: -8.7207 },
        { name: "Bilbao", lat: 43.2630, lon: -2.9350 },
        { name: "San Sebastián", lat: 43.3183, lon: -1.9812 },
        { name: "Pamplona", lat: 42.8125, lon: -1.6458 },
        { name: "Zaragoza", lat: 41.6488, lon: -0.8891 },
        { name: "Barcelona", lat: 41.3851, lon: 2.1734 },
        { name: "Tarragona", lat: 41.1189, lon: 1.2445 },
        { name: "Valencia", lat: 39.4699, lon: -0.3763 },
        { name: "Alicante", lat: 38.3460, lon: -0.4907 },
        { name: "Murcia", lat: 37.9922, lon: -1.1307 },
        { name: "Granada", lat: 37.1773, lon: -3.5986 },
        { name: "Córdoba", lat: 37.8882, lon: -4.7794 },
        { name: "Sevilla", lat: 37.3891, lon: -5.9845 },
        { name: "Málaga", lat: 36.7213, lon: -4.4214 },
        { name: "Cádiz", lat: 36.5298, lon: -6.2926 },
        { name: "Las Palmas", lat: 28.1235, lon: -15.4363 },
        { name: "Santa Cruz", lat: 28.4636, lon: -16.2518 },
        { name: "Palma de Mallorca", lat: 39.5696, lon: 2.6502 },
        { name: "Ibiza", lat: 38.9068, lon: 1.4206 },
        { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
        { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
        { name: "Bogotá", lat: 4.7110, lon: -74.0721 }
    ],
    de: [
        { name: "Berlin", lat: 52.5200, lon: 13.4050 },
        { name: "Potsdam", lat: 52.3989, lon: 13.0657 },
        { name: "Leipzig", lat: 51.3397, lon: 12.3731 },
        { name: "Dresden", lat: 51.0504, lon: 13.7373 },
        { name: "Hamburg", lat: 53.5511, lon: 9.9937 },
        { name: "Bremen", lat: 53.0793, lon: 8.8017 },
        { name: "Hannover", lat: 52.3759, lon: 9.7320 },
        { name: "Köln", lat: 50.9375, lon: 6.9603 },
        { name: "Düsseldorf", lat: 51.2277, lon: 6.7735 },
        { name: "Frankfurt", lat: 50.1109, lon: 8.6821 },
        { name: "Stuttgart", lat: 48.7758, lon: 9.1829 },
        { name: "München", lat: 48.1351, lon: 11.5820 },
        { name: "Nürnberg", lat: 49.4521, lon: 11.0768 },
        { name: "Heidelberg", lat: 49.3988, lon: 8.6724 },
        { name: "Freiburg", lat: 47.9990, lon: 7.8421 },
        { name: "Kiel", lat: 54.3233, lon: 10.1228 },
        { name: "Rostock", lat: 54.0833, lon: 12.1088 },
        { name: "Schwerin", lat: 53.6355, lon: 11.4012 },
        { name: "Erfurt", lat: 50.9848, lon: 11.0299 },
        { name: "Magdeburg", lat: 52.1243, lon: 11.6290 },
        { name: "Mainz", lat: 49.9929, lon: 8.2473 },
        { name: "Wiesbaden", lat: 50.0782, lon: 8.2398 },
        { name: "Bonn", lat: 50.7374, lon: 7.0982 },
        { name: "Aachen", lat: 50.7753, lon: 6.0839 },
        { name: "Münster", lat: 51.9607, lon: 7.6261 },
        { name: "Wien", lat: 48.2082, lon: 16.3738 },
        { name: "Salzburg", lat: 47.8095, lon: 13.0550 },
        { name: "Zürich", lat: 47.3769, lon: 8.5417 },
        { name: "Genf", lat: 46.2044, lon: 6.1432 },
        { name: "Bern", lat: 46.9480, lon: 7.4474 }
    ],
    en: [
        { name: "London", lat: 51.5074, lon: -0.1278 },
        { name: "Oxford", lat: 51.7520, lon: -1.2577 },
        { name: "Cambridge", lat: 52.2053, lon: 0.1218 },
        { name: "Manchester", lat: 53.4808, lon: -2.2426 },
        { name: "Liverpool", lat: 53.4084, lon: -2.9916 },
        { name: "Edinburgh", lat: 55.9533, lon: -3.1883 },
        { name: "Glasgow", lat: 55.8642, lon: -4.2518 },
        { name: "Cardiff", lat: 51.4816, lon: -3.1791 },
        { name: "Belfast", lat: 54.5973, lon: -5.9301 },
        { name: "Bristol", lat: 51.4545, lon: -2.5879 },
        { name: "New York City", lat: 40.7128, lon: -74.0060 },
        { name: "Boston", lat: 42.3601, lon: -71.0589 },
        { name: "Washington D.C.", lat: 38.9072, lon: -77.0369 },
        { name: "Chicago", lat: 41.8781, lon: -87.6298 },
        { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
        { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
        { name: "Seattle", lat: 47.6062, lon: -122.3321 },
        { name: "Miami", lat: 25.7617, lon: -80.1918 },
        { name: "Toronto", lat: 43.6532, lon: -79.3832 },
        { name: "Vancouver", lat: 49.2827, lon: -123.1207 },
        { name: "Sydney", lat: -33.8688, lon: 151.2093 },
        { name: "Melbourne", lat: -37.8136, lon: 144.9631 },
        { name: "Auckland", lat: -36.8485, lon: 174.7633 },
        { name: "Birmingham", lat: 52.4862, lon: -1.8904 },
        { name: "Newcastle", lat: 54.9783, lon: -1.6178 },
        { name: "Austin", lat: 30.2672, lon: -97.7431 },
        { name: "Denver", lat: 39.7392, lon: -104.9903 },
        { name: "Montreal", lat: 45.5017, lon: -73.5673 },
        { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
        { name: "Dublin", lat: 53.3498, lon: -6.2603 }
    ]
};

// Ülke odaklanma koordinatları
const COUNTRY_CENTERS: Record<string, { lat: number; lon: number }> = {
    es: { lat: 40.4637, lon: -3.7492 },
    fr: { lat: 46.2276, lon: 2.2137 },
    de: { lat: 51.1657, lon: 10.4515 },
    en: { lat: 55.3781, lon: -3.4360 }
};

interface Unit {
    id: number;
    title: string;
    description: string;
    color: string;
    lessons: any[];
}

interface WorldMap3DProps {
    langCode: string;
    units: Unit[];
    completedLessons: number[];
    getLessonRoute: (type: any, unitId: number, lessonIndex: number, lessons: any[]) => string;
    getLessonDescription: (type: any) => string;
}

// GPS (enlem/boylam) koordinatlarını standard equirectangular UV eşlemeli 3D küre koordinatına dönüştür
function convertLatLngToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
    const phi = (lat * Math.PI) / 180;
    const theta = ((lon + 180) * Math.PI) / 180;

    const x = -radius * Math.cos(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi);
    const z = radius * Math.cos(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

// ===== HARİTA KAMERA YÖNETİMİ BİLEŞENİ =====
const CameraController = ({ langCode, isUserInteracting }: { langCode: string; isUserInteracting: boolean }) => {
    const { camera } = useThree();

    const targetVector = useMemo(() => {
        const center = COUNTRY_CENTERS[langCode] || { lat: 45, lon: 10 };
        // Kamera mesafesi = 5.2
        return convertLatLngToVector3(center.lat, center.lon, 5.2);
    }, [langCode]);

    useFrame(() => {
        if (!isUserInteracting) {
            camera.position.lerp(targetVector, 0.05);
            camera.lookAt(0, 0, 0);
        }
    });

    return null;
};

// ===== PARLAYAN ÜNİTE PİNİ BİLEŞENİ =====
interface PinProps {
    position: THREE.Vector3;
    isActive: boolean;
    isCompleted: boolean;
    onClick: () => void;
}

const UnitPin = ({ position, isActive, isCompleted, onClick }: PinProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            if (isActive) {
                const scale = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.15;
                meshRef.current.scale.set(scale, scale, scale);
            }
        }
    });

    const color = isCompleted 
        ? "#10b981" 
        : isActive 
            ? "#f97316" 
            : "#ffffff";

    return (
        <mesh ref={meshRef} position={position} onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color={color} toneMapped={false} />
            
            {(isActive || isCompleted) && (
                <mesh>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshBasicMaterial color={color} transparent opacity={0.4} wireframe />
                </mesh>
            )}
        </mesh>
    );
};

export default function WorldMap3D({ langCode, units, completedLessons, getLessonRoute, getLessonDescription }: WorldMap3DProps) {
    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Dil değiştiğinde detay kartını sıfırla
    useEffect(() => {
        setSelectedUnit(null);
    }, [langCode]);

    // Küre kaplaması (Gerçek Dünya Haritası Dokusu) Yükleme
    useEffect(() => {
        const loader = new THREE.TextureLoader();
        
        // 1. Seçenek: Gece ışıkları olan süper şık koyu tema haritası (Gerçek NASA verisi)
        loader.load(
            "https://unpkg.com/three-globe/example/img/earth-night.jpg",
            (tex) => {
                setTexture(tex);
            },
            undefined,
            (err) => {
                console.warn("Gece haritası yüklenemedi, alternatif haritaya geçiliyor...", err);
                // 2. Seçenek (Yedek): Klasik mavi mermer dünya haritası
                loader.load(
                    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
                    (tex2) => {
                        setTexture(tex2);
                    },
                    undefined,
                    () => {
                        // 3. Seçenek (Yedek 2): Sade koyu harita
                        loader.load(
                            "https://unpkg.com/three-globe/example/img/earth-dark.jpg",
                            (tex3) => setTexture(tex3)
                        );
                    }
                );
            }
        );
    }, []);

    const handleStartInteraction = () => {
        setIsUserInteracting(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleEndInteraction = () => {
        timeoutRef.current = setTimeout(() => {
            setIsUserInteracting(false);
        }, 3000);
    };

    // Dil/seviyedeki üniteleri harita pinlerine dönüştür
    const pins = useMemo(() => {
        const cityList = CITY_COORDINATES[langCode] || CITY_COORDINATES.fr;
        
        return units.map((unit, index) => {
            const city = cityList[index % cityList.length];
            const position = convertLatLngToVector3(city.lat, city.lon, 2.01); 

            const completedCount = unit.lessons.filter(l => completedLessons.includes(l.id)).length;
            const isCompleted = completedCount === unit.lessons.length && unit.lessons.length > 0;
            const isAccessible = index === 0 || index === 21 || completedLessons.length > 0; 

            return {
                unit,
                cityName: city.name,
                position,
                isCompleted,
                isAccessible,
                completedCount
            };
        });
    }, [langCode, units, completedLessons]);

    const activeUnitIndex = useMemo(() => {
        for (let i = 0; i < units.length; i++) {
            const completedCount = units[i].lessons.filter(l => completedLessons.includes(l.id)).length;
            if (completedCount < units[i].lessons.length) {
                return i;
            }
        }
        return 0;
    }, [units, completedLessons]);

    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 animate-in fade-in duration-500">
            {/* 3D CANVAS */}
            <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
                <ambientLight intensity={0.9} />
                <pointLight position={[10, 10, 10]} intensity={2.0} />
                
                <CameraController langCode={langCode} isUserInteracting={isUserInteracting} />

                {/* Dünya Küresi Grubu */}
                <group>
                    {/* 1. Gerçek Harita Dokulu Dünya Küresi */}
                    <mesh>
                        <sphereGeometry args={[2, 64, 64]} />
                        {texture ? (
                            <meshStandardMaterial 
                                map={texture} 
                                roughness={0.7}
                                metalness={0.1}
                            />
                        ) : (
                            <meshPhysicalMaterial 
                                color="#1e293b" 
                                roughness={0.5} 
                                metalness={0.1}
                                transmission={0.4}
                                transparent
                                opacity={0.8}
                            />
                        )}
                    </mesh>

                    {/* 2. Dış Atmosfer Işıltısı */}
                    <mesh>
                        <sphereGeometry args={[2.005, 32, 32]} />
                        <meshBasicMaterial 
                            color="#818cf8" 
                            transparent 
                            opacity={0.06} 
                            wireframe
                        />
                    </mesh>

                    {/* 3. Harita Üzerindeki Ünite Pinleri */}
                    {pins.map((pin, index) => (
                        <UnitPin
                            key={pin.unit.id}
                            position={pin.position}
                            isActive={index === activeUnitIndex}
                            isCompleted={pin.isCompleted}
                            onClick={() => setSelectedUnit(pin.unit)}
                        />
                    ))}
                </group>

                {/* Orbit Kontrolleri */}
                <OrbitControls 
                    enableDamping 
                    dampingFactor={0.05} 
                    minDistance={3.5}
                    maxDistance={7}
                    enablePan={false}
                    onStart={handleStartInteraction}
                    onEnd={handleEndInteraction}
                />
            </Canvas>

            {/* HARİTA AÇIKLAMALARI VE REHBER */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 px-3 py-2 rounded-2xl flex flex-col gap-1.5 text-xs text-slate-300">
                    <span className="font-bold text-[10px] text-indigo-400 uppercase tracking-wider mb-0.5">Harita İşaretleri</span>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                        <span>Kaldığın Yer</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span>Tamamlandı</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span>Kilitli / Sıradaki</span>
                    </div>
                </div>
            </div>

            <div className="absolute top-4 right-4 z-10 text-right pointer-events-none">
                <span className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                    3D UYDU GÖRÜNÜMÜ
                </span>
            </div>

            {/* DETAY KARTI (GLASSMORPHISM POPUP) */}
            {selectedUnit && (() => {
                const completedLessonCount = selectedUnit.lessons.filter(l => completedLessons.includes(l.id)).length;
                const progressPercent = selectedUnit.lessons.length > 0 
                    ? (completedLessonCount / selectedUnit.lessons.length) * 100 
                    : 0;

                let nextLessonIndex = 0;
                let nextLesson = selectedUnit.lessons[0];
                for (let li = 0; li < selectedUnit.lessons.length; li++) {
                    if (!completedLessons.includes(selectedUnit.lessons[li].id)) {
                        nextLessonIndex = li;
                        nextLesson = selectedUnit.lessons[li];
                        break;
                    }
                }

                const startRoute = getLessonRoute(nextLesson.type, selectedUnit.id, nextLessonIndex, selectedUnit.lessons);

                return (
                    <div className="absolute inset-x-4 bottom-4 md:inset-x-auto md:right-4 md:bottom-4 md:w-96 bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-6 rounded-3xl shadow-2xl z-20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-black px-2 py-1 rounded-md tracking-wider uppercase">
                                    Ünite {selectedUnit.id}
                                </span>
                                <h3 className="text-xl font-black text-white mt-2 leading-tight">{selectedUnit.title}</h3>
                            </div>
                            <button 
                                onClick={() => setSelectedUnit(null)}
                                className="p-1 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{selectedUnit.description}</p>

                        <div className="mb-6 bg-white/5 border border-white/5 p-3.5 rounded-2xl">
                            <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                                <span>ÜNİTE İLERLEMESİ</span>
                                <span className="text-white">%{progressPercent.toFixed(0)}</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                        </div>

                        <Link href={startRoute} className="block w-full">
                            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                <Play className="w-4 h-4 fill-white" />
                                <span>
                                    {progressPercent === 100 
                                        ? "Tekrar Et" 
                                        : progressPercent > 0 
                                            ? `${getLessonDescription(nextLesson.type)} ile Devam Et` 
                                            : "İlk Derse Başla"}
                                </span>
                            </button>
                        </Link>
                    </div>
                );
            })()}
        </div>
    );
}
