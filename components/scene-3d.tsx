"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Html, ContactShadows, Float, Text, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import { Scene as SceneData } from "@/lib/scenes";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Scene3DProps {
  sceneData: { id: string; titleTr?: string; [key: string]: any } | null;
  messages: Message[];
  isLoading: boolean;
  isMouthOpen?: boolean;
}

// Model Configuration Map
const SCENE_MODEL_MAP: Record<string, { 
  model: string; 
  shopkeeperPos: [number, number, number]; 
  playerPos: [number, number, number];
  cameraPos: [number, number, number]; 
  cameraTarget: [number, number, number];
  scale: number 
}> = {
  pharmacy: { model: "/models/little-shop.glb", shopkeeperPos: [0, 0, -2], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 10 },
  supermarket: { model: "/models/little-shop.glb", shopkeeperPos: [0, 0, -2], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 10 },
  bakery: { model: "/models/little-shop.glb", shopkeeperPos: [0, 0, -2], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 10 },
  market: { model: "/models/little-shop.glb", shopkeeperPos: [0, 0, -2], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 10 },
  cafe: { model: "/models/cafe.glb", shopkeeperPos: [0, 0, -2], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 10 },
  
  // Hastane & Havalimanı Sahneleri
  doctor: { model: "/models/hospital.glb", shopkeeperPos: [0, 0, -2], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 5 },
  airport: { model: "/models/airport.glb", shopkeeperPos: [0, 0, -3], playerPos: [-0.6, 0, 1.2], cameraPos: [0.5, 1.8, 4], cameraTarget: [0, 1.2, -1], scale: 5 },
};

function GLBModel({ modelPath, scale = 1 }: { modelPath: string; scale?: number }) {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <Center position={[0, -0.5, 0]}>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-violet-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-violet-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-white/70 text-sm font-medium animate-pulse">Sahne Yükleniyor...</p>
      </div>
    </Html>
  );
}

// Core Generic Character Component
function Character({ 
  isTyping, 
  message, 
  position, 
  rotationY = 0,
  bodyColor, 
  headColor, 
  isPlayer,
  isMouthOpen
}: { 
  isTyping: boolean; 
  message: string | null; 
  position: [number, number, number]; 
  rotationY?: number;
  bodyColor: string; 
  headColor: string;
  isPlayer?: boolean;
  isMouthOpen?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Subtle breathing (no flying)
  useFrame((state) => {
    if (groupRef.current) {
      // Very tiny Y animation (breathing) and anchor safely
      groupRef.current.position.y = position[1] + (Math.sin(state.clock.elapsedTime * 2 + (isPlayer ? 0 : Math.PI)) * 0.03);
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, rotationY, 0]}>
      {/* Speech Bubble */}
      {(message || isTyping) && (
        <Html position={[0, 2.1, 0]} zIndexRange={[100, 0]}>
          <div className={`-translate-x-1/2 -translate-y-full mb-4 backdrop-blur-md border p-3 rounded-xl min-w-[150px] max-w-[280px] shadow-2xl animate-in fade-in zoom-in duration-300 ${isPlayer ? "bg-fuchsia-900/90 border-fuchsia-400/30 text-white" : "bg-slate-900/90 border-white/20 text-white"}`}>
            {isTyping ? (
              <div className="flex space-x-1.5 items-center justify-center p-2">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
              </div>
            ) : (
              <div className="max-h-[160px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20">
                <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">
                  {message}
                </p>
              </div>
            )}
            {/* Bubble Tail */}
            <div className={`absolute bottom-[-6px] w-3 h-3 border-b border-r rotate-45 ${isPlayer ? "bg-fuchsia-900/90 border-fuchsia-400/30 right-4" : "bg-slate-900/90 border-white/20 left-1/2 -translate-x-1/2"}`}></div>
          </div>
        </Html>
      )}

      {/* Body: Capsule is 1.4 units tall. By placing Y at 0.7, its base sits exactly on 0. */}
      {/* We make the capsule radius 0.4 and height 0.6 => total height 0.6 + (2*0.4) = 1.4 */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <capsuleGeometry args={[0.3, 0.6, 4, 16]} />
        <meshStandardMaterial color={bodyColor} roughness={0.7} metalness={0.1} />
      </mesh>
      
      {/* Head Group */}
      <group position={[0, 1.7, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color={headColor} roughness={0.5} />
        </mesh>

        {/* Face Elements target the local +Z axis as "forward" */}
        {/* Left Eye */}
        <mesh position={[-0.1, 0.05, 0.22]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Right Eye */}
        <mesh position={[0.1, 0.05, 0.22]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Mouth (Scales Y based on isMouthOpen) */}
        <mesh position={[0, -0.05, 0.24]} scale={[1, isMouthOpen ? 4 : 0.5, 1]}>
          <boxGeometry args={[0.08, 0.02, 0.02]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      </group>
    </group>
  );
}

// Fallback Scene
function InteractiveProp({ position, name, color }: { position: [number, number, number], name: string, color: string }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(() => { if (meshRef.current && hovered) meshRef.current.rotation.y += 0.02; });
  return (
    <group position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        castShadow
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color={hovered ? "#a78bfa" : color} />
      </mesh>
      {hovered && (
        <Html position={[0, 0.8, 0]} center>
          <div className="bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">{name}</div>
        </Html>
      )}
    </group>
  );
}

function FallbackSceneEnvironment({ sceneData }: { sceneData: { id: string; titleTr?: string; [key: string]: any } | null }) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.8} />
        <gridHelper args={[20, 20, 0x4c1d95, 0x312e81]} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>
      <InteractiveProp position={[-2, 0, -1]} name="La Boîte" color="#4f46e5" />
      <InteractiveProp position={[2, 0, -1.5]} name="Le Cube" color="#ec4899" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[0, 3, -4]}>
        <Text fontSize={0.5} color="#a78bfa" anchorX="center" anchorY="middle">{sceneData?.titleTr || "Sanal Sahne"}</Text>
      </Float>
    </group>
  );
}

function SceneEnvironment({ sceneData }: { sceneData: { id: string; titleTr?: string; [key: string]: any } | null }) {
  const sceneId = sceneData?.id || "";
  const modelConfig = SCENE_MODEL_MAP[sceneId];
  if (modelConfig) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <GLBModel modelPath={modelConfig.model} scale={modelConfig.scale} />
      </Suspense>
    );
  }
  return <FallbackSceneEnvironment sceneData={sceneData} />;
}

export function Scene3D({ sceneData, messages, isLoading, isMouthOpen }: Scene3DProps) {
  // Extract text for bubbles
  const userMessages = messages.filter(m => m.role === 'user');
  const lastUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1].content : null;

  const assistantMessages = messages.filter(m => m.role === 'assistant');
  const lastAssistantMessage = assistantMessages.length > 0 ? assistantMessages[assistantMessages.length - 1].content : null;

  // Set positions from map OR default fallback coordinates
  const sceneId = sceneData?.id || "";
  const config = SCENE_MODEL_MAP[sceneId];
  
  const shopkeeperPos = config?.shopkeeperPos || [0, 0, -2];
  const playerPos = config?.playerPos || [-0.6, 0, 1.2];
  const cameraPos = config?.cameraPos || [0.5, 1.8, 4];
  const cameraTarget = config?.cameraTarget || [0, 1.2, -1];

  return (
    <div className="absolute inset-0 z-0 bg-slate-950">
      <Canvas shadows camera={{ position: cameraPos as [number, number, number], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#c084fc" />
        <pointLight position={[3, 3, 3]} intensity={0.3} color="#fbbf24" />
        
        {/* Sky/Fog */}
        <Environment preset="city" />
        <fog attach="fog" args={['#020617', 5, 20]} />
        
        {/* Scene Background */}
        <SceneEnvironment sceneData={sceneData} />
        
        {/* Shopkeeper (NPC) */}
        <Character 
          isTyping={isLoading} 
          message={lastAssistantMessage} 
          position={shopkeeperPos as [number, number, number]} 
          bodyColor="#8b5cf6" // Violet body
          headColor="#c4b5fd" 
          isMouthOpen={isMouthOpen}
        />

        {/* Player (User) */}
        <Character 
          isTyping={false} // User is not the AI, no dots if loading
          message={lastUserMessage} 
          position={playerPos as [number, number, number]} 
          rotationY={Math.PI - 0.5} // slightly turned away from camera, looking towards shopkeeper
          bodyColor="#d946ef" // Fuchsia/Pink body for contrast
          headColor="#f0abfc" 
          isPlayer={true}
        />
        
        {/* Controls - Immersion limits */}
        <OrbitControls 
          enablePan={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 2 - 0.05} // Ground level
          minDistance={1}
          maxDistance={5} 
          target={cameraTarget as [number, number, number]}
        />
        <ContactShadows position={[0, -0.49, 0]} opacity={0.4} scale={20} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
