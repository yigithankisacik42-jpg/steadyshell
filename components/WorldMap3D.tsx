"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Play, X, Globe, Navigation, ChevronLeft, Award } from "lucide-react";
import { getCurriculum } from "@/lib/curriculum";
import { cn } from "@/lib/utils";

// ===== ÜLKELER (DÜNYA GÖRÜNÜMÜ) =====
const COUNTRIES = [
    { code: "fr", name: "Fransa (Fransızca)", lat: 46.2276, lon: 2.2137, flag: "🇫🇷" },
    { code: "es", name: "İspanya (İspanyolca)", lat: 40.4637, lon: -3.7492, flag: "🇪🇸" },
    { code: "de", name: "Almanya (Almanca)", lat: 51.1657, lon: 10.4515, flag: "🇩🇪" },
    { code: "en", name: "İngiltere (İngilizce)", lat: 51.5074, lon: -0.1278, flag: "🇬🇧" }
];

// ===== ŞEHİRLER & SEVİYELER (ÜLKE GÖRÜNÜMÜ) =====
const LEVEL_CITIES: Record<string, { name: string; lat: number; lon: number; levelCode: string; desc: string }[]> = {
    fr: [
        { name: "Paris", lat: 48.8566, lon: 2.3522, levelCode: "A1", desc: "Başlangıç: Temel selamlaşmalar, sayılar ve günlük konuşmalar." },
        { name: "Lyon", lat: 45.7640, lon: 4.8357, levelCode: "A2", desc: "Temel: Günlük rutinler, alışveriş ve basit diyaloglar." },
        { name: "Marseille", lat: 43.2965, lon: 5.3698, levelCode: "B1", desc: "Orta Altı: Seyahat deneyimleri, hayaller ve ilgi alanları." },
        { name: "Bordeaux", lat: 44.8378, lon: -0.5792, levelCode: "B2", desc: "Orta Üstü: Akıcı konuşma, soyut konular ve tartışmalar." }
    ],
    es: [
        { name: "Madrid", lat: 40.4168, lon: -3.7038, levelCode: "A1", desc: "Başlangıç: Temel İspanyolca ifadeler, sayılar ve aile üyeleri." },
        { name: "Barcelona", lat: 41.3851, lon: 2.1734, levelCode: "A2", desc: "Temel: Geçmiş zamanlar, yön tarifleri ve restoranda sipariş." },
        { name: "Valencia", lat: 39.4699, lon: -0.3763, levelCode: "B1", desc: "Orta Altı: Koşul cümleleri, gelecek zamanlar ve fikir beyanı." },
        { name: "Sevilla", lat: 37.3891, lon: -5.9845, levelCode: "B2", desc: "Orta Üstü: Subjunctive yapılar, iş dünyası ve akıcı sohbetler." }
    ],
    de: [
        { name: "Berlin", lat: 52.5200, lon: 13.4050, levelCode: "A1", desc: "Başlangıç: Almanca tanışma kalıpları, sayılar ve artikeller." },
        { name: "München", lat: 48.1351, lon: 11.5820, levelCode: "A2", desc: "Temel: Günlük aktiviteler, Perfekt (geçmiş) ve yönler." },
        { name: "Frankfurt", lat: 50.1109, lon: 8.6821, levelCode: "B1", desc: "Orta Altı: İş Almancası, pasif çatı ve edatlar." },
        { name: "Hamburg", lat: 53.5511, lon: 9.9937, levelCode: "B2", desc: "Orta Üstü: Karşılaştırmalı analizler, sunum teknikleri." }
    ],
    en: [
        { name: "London", lat: 51.5074, lon: -0.1278, levelCode: "A1", desc: "Başlangıç: Temel İngilizce zamanlar, kendini tanıtma." },
        { name: "Manchester", lat: 53.4808, lon: -2.2426, levelCode: "A2", desc: "Temel: Karşılaştırmalar, sıfatlar ve yön bulma." },
        { name: "Edinburgh", lat: 55.9533, lon: -3.1883, levelCode: "B1", desc: "Orta Altı: Phrasal verb'ler, Reported Speech (dolaylı anlatım)." },
        { name: "Boston (USA)", lat: 42.3601, lon: -71.0589, levelCode: "B2", desc: "Orta Üstü: Akademik yazım, deyimler ve sunum yapma." }
    ]
};

interface WorldMap3DProps {
    currentLanguageCode: string;
    currentLevelCode: string;
    onSelectLanguageAndLevel: (langCode: string, levelCode: string) => void;
    completedLessons: number[];
    setViewMode: (mode: "list" | "map") => void;
}

// GPS -> 3D Küre Dönüşümü
function convertLatLngToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
    const phi = (lat * Math.PI) / 180;
    const theta = ((lon + 180) * Math.PI) / 180;

    const x = -radius * Math.cos(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi);
    const z = radius * Math.cos(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

// ===== HARİTA KAMERA YÖNETİMİ BİLEŞENİ =====
interface CameraControllerProps {
    mapState: "world" | "country";
    selectedCountry: string | null;
    isUserInteracting: boolean;
}

const CameraController = ({ mapState, selectedCountry, isUserInteracting }: CameraControllerProps) => {
    const { camera } = useThree();

    // Kamera hedef konumu hesabı
    const targetVector = useMemo(() => {
        if (mapState === "country" && selectedCountry) {
            const country = COUNTRIES.find(c => c.code === selectedCountry);
            if (country) {
                // Yakın plan: 3.8 uzaklıkta odaklan
                return convertLatLngToVector3(country.lat, country.lon, 3.8);
            }
        }
        // Dünya Görünümü: Yörünge başlangıç noktası
        return new THREE.Vector3(0, 1.2, 5.2);
    }, [mapState, selectedCountry]);

    useFrame((state) => {
        if (!isUserInteracting) {
            if (mapState === "world") {
                // Dünya modunda kendi etrafında yavaşça dönme animasyonu
                const speed = 0.05;
                camera.position.x = 5.2 * Math.sin(state.clock.getElapsedTime() * speed);
                camera.position.z = 5.2 * Math.cos(state.clock.getElapsedTime() * speed);
                camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.2, 0.05);
                camera.lookAt(0, 0, 0);
            } else {
                // Ülke modunda hedeflenen koordinatlara pürüzsüz yaklaşma
                camera.position.lerp(targetVector, 0.05);
                camera.lookAt(0, 0, 0);
            }
        }
    });

    return null;
};

// ===== INTERAKTİF PİN BİLEŞENİ =====
interface PinProps {
    position: THREE.Vector3;
    color: string;
    isActive: boolean;
    label: string;
    onClick: () => void;
    onHover: (hovered: boolean) => void;
}

const GlobePin = ({ position, color, isActive, label, onClick, onHover }: PinProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current && isActive) {
            const scale = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.15;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh 
            ref={meshRef} 
            position={position} 
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "pointer";
                onHover(true);
            }}
            onPointerOut={() => {
                document.body.style.cursor = "auto";
                onHover(false);
            }}
        >
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color={color} toneMapped={false} />
            
            <mesh>
                <sphereGeometry args={[0.11, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.35} wireframe />
            </mesh>
        </mesh>
    );
};

export default function WorldMap3D({ currentLanguageCode, currentLevelCode, onSelectLanguageAndLevel, completedLessons, setViewMode }: WorldMap3DProps) {
    const [mapState, setMapState] = useState<"world" | "country">("world");
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [selectedCity, setSelectedCity] = useState<any | null>(null);
    const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Başlangıçta aktif dile göre haritayı aç
    useEffect(() => {
        if (currentLanguageCode) {
            setSelectedCountry(currentLanguageCode);
            setMapState("country");
        }
    }, [currentLanguageCode]);

    // Küre kaplaması (Gerçek Dünya Haritası Dokusu) Yükleme
    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(
            "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg",
            (tex) => setTexture(tex),
            undefined,
            () => {
                loader.load(
                    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
                    (tex2) => setTexture(tex2)
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

    // Yörüngeye (Dünya moduna) geri çıkış
    const handleZoomOut = () => {
        setMapState("world");
        setSelectedCountry(null);
        setSelectedCity(null);
        setIsUserInteracting(false);
    };

    // Bir ülkeye tıklayıp yakınlaşma
    const handleCountryClick = (code: string) => {
        setSelectedCountry(code);
        setMapState("country");
        setSelectedCity(null);
        setIsUserInteracting(false);
    };

    // Seçilen ülkenin 4 şehir pinini hesapla
    const cityPins = useMemo(() => {
        if (!selectedCountry) return [];
        const list = LEVEL_CITIES[selectedCountry] || [];
        
        return list.map((city) => {
            const position = convertLatLngToVector3(city.lat, city.lon, 2.01);
            
            // İlgili seviyenin ilerlemesini hesapla
            const levelUnits = getCurriculum(selectedCountry, city.levelCode);
            let totalLessons = 0;
            let completedCount = 0;
            
            levelUnits.forEach(unit => {
                totalLessons += unit.lessons.length;
                completedCount += unit.lessons.filter(l => completedLessons.includes(l.id)).length;
            });
            
            const progress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
            const isCompleted = progress === 100 && totalLessons > 0;
            const isActive = selectedCountry === currentLanguageCode && city.levelCode === currentLevelCode;

            return {
                ...city,
                position,
                progress,
                isCompleted,
                isActive
            };
        });
    }, [selectedCountry, completedLessons, currentLanguageCode, currentLevelCode]);

    // Dünya Görünümündeki Ülke Pinleri
    const countryPins = useMemo(() => {
        return COUNTRIES.map((c) => {
            const position = convertLatLngToVector3(c.lat, c.lon, 2.01);
            const isActive = currentLanguageCode === c.code;
            return {
                ...c,
                position,
                isActive
            };
        });
    }, [currentLanguageCode]);

    return (
        <div className="relative w-full h-[65vh] md:h-[75vh] bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 animate-in fade-in duration-500">
            
            {/* SOL ÜST GERİ GİT BUTONU */}
            {mapState === "country" && (
                <button 
                    onClick={handleZoomOut}
                    className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-lg transition-all active:scale-[0.98] pointer-events-auto cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Yörüngeye Dön</span>
                </button>
            )}

            {/* HOVER ESNASINDA YUKARIDA ETİKET */}
            {hoveredLabel && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-indigo-600/95 backdrop-blur-md text-white font-bold py-2 px-5 rounded-full text-xs tracking-wider shadow-lg shadow-indigo-600/20 border border-indigo-400/30 animate-in fade-in zoom-in-95 pointer-events-none">
                    {hoveredLabel}
                </div>
            )}

            {/* 3D CANVAS */}
            <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
                <ambientLight intensity={1.4} />
                <pointLight position={[10, 10, 10]} intensity={3.0} />

                <CameraController 
                    mapState={mapState} 
                    selectedCountry={selectedCountry} 
                    isUserInteracting={isUserInteracting} 
                />

                <group>
                    {/* Küre Gövdesi */}
                    <mesh>
                        <sphereGeometry args={[2, 64, 64]} />
                        {texture ? (
                            <meshStandardMaterial map={texture} roughness={0.7} metalness={0.1} />
                        ) : (
                            <meshPhysicalMaterial color="#1e293b" roughness={0.5} transparent opacity={0.8} />
                        )}
                    </mesh>

                    {/* Atmosfer Parlaması */}
                    <mesh>
                        <sphereGeometry args={[2.005, 32, 32]} />
                        <meshBasicMaterial color="#818cf8" transparent opacity={0.06} wireframe />
                    </mesh>

                    {/* DÜNYA GÖRÜNÜMÜNDEYKEN: ÜLKE PİNLERİ */}
                    {mapState === "world" && countryPins.map((country) => (
                        <GlobePin
                            key={country.code}
                            position={country.position}
                            color={country.isActive ? "#f97316" : "#4f46e5"}
                            isActive={country.isActive}
                            label={country.name}
                            onClick={() => handleCountryClick(country.code)}
                            onHover={(hovered) => setHoveredLabel(hovered ? `${country.flag} ${country.name}` : null)}
                        />
                    ))}

                    {/* ÜLKE DETAY GÖRÜNÜMÜNDEYKEN: ŞEHİR PİNLERİ */}
                    {mapState === "country" && cityPins.map((city) => (
                        <GlobePin
                            key={city.name}
                            position={city.position}
                            color={city.isCompleted ? "#10b981" : city.isActive ? "#f97316" : "#ffffff"}
                            isActive={city.isActive}
                            label={`${city.name} (${city.levelCode})`}
                            onClick={() => setSelectedCity(city)}
                            onHover={(hovered) => setHoveredLabel(hovered ? `${city.name} - ${city.levelCode} Seviyesi` : null)}
                        />
                    ))}
                </group>

                <OrbitControls 
                    enableDamping 
                    dampingFactor={0.05} 
                    minDistance={3.2}
                    maxDistance={6.5}
                    enablePan={false}
                    onStart={handleStartInteraction}
                    onEnd={handleEndInteraction}
                />
            </Canvas>

            {/* HARİTA AÇIKLAMALARI VE REHBER */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
                <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/50 px-3.5 py-2.5 rounded-2xl flex flex-col gap-1.5 text-[10px] md:text-xs text-slate-300">
                    <span className="font-bold text-[10px] text-indigo-400 uppercase tracking-wider mb-0.5">Harita İşaretleri</span>
                    {mapState === "world" ? (
                        <>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                                <span>Aktif Çalıştığın Dil</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                                <span>Öğrenilebilecek Diller</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                                <span>Aktif Seviye Şehri</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                <span>Tüm Seviye Tamamlandı</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                <span>Diğer Seviyeler</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="absolute top-4 right-4 z-10 text-right pointer-events-none">
                <span className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                    {mapState === "world" ? "YÖRÜNGE GÖRÜNÜMÜ" : "ÜLKE GÖRÜNÜMÜ"}
                </span>
            </div>

            {/* SEVİYE SEÇİM POPUP KARTI */}
            {selectedCity && (() => {
                const country = COUNTRIES.find(c => c.code === selectedCountry);
                const flag = country ? country.flag : "";
                
                return (
                    <div className="absolute inset-x-4 bottom-4 md:inset-x-auto md:right-4 md:bottom-4 md:w-96 bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-6 rounded-3xl shadow-2xl z-20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 pointer-events-auto">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-black px-2.5 py-1 rounded-md tracking-wider uppercase">
                                    {flag} {selectedCity.levelCode} Seviyesi
                                </span>
                                <h3 className="text-xl font-black text-white mt-2 leading-tight">
                                    {selectedCity.name} Şehri
                                </h3>
                            </div>
                            <button 
                                onClick={() => setSelectedCity(null)}
                                className="p-1 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{selectedCity.desc}</p>

                        <div className="mb-6 bg-white/5 border border-white/5 p-3.5 rounded-2xl">
                            <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                                <span>SEVİYE İLERLEMESİ</span>
                                <span className="text-white">%{selectedCity.progress.toFixed(0)}</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${selectedCity.progress}%` }}
                                />
                            </div>
                        </div>

                        <button 
                            onClick={() => {
                                onSelectLanguageAndLevel(selectedCountry!, selectedCity.levelCode);
                                setViewMode("list"); // Kullanıcı başla dediğinde haritayı kapatıp doğrudan liste müfredatını aç
                            }}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                        >
                            <Play className="w-4 h-4 fill-white" />
                            <span>
                                {selectedCity.isActive 
                                    ? "Bu Seviyeye Devam Et" 
                                    : "Bu Seviyeye Geçiş Yap & Başla"}
                            </span>
                        </button>
                    </div>
                );
            })()}
        </div>
    );
}
