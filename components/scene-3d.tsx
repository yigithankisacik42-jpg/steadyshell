"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Html, ContactShadows, Float, Text, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import { Scene as SceneData } from "@/lib/scenes";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Scene3DProps {
  sceneData: SceneData | null;
  messages: Message[];
  isLoading: boolean;
}

// Sahne ID'lerine göre 3D model dosyası ve NPC konumu eşleştirmesi
const SCENE_MODEL_MAP: Record<string, { model: string; npcPosition: [number, number, number]; cameraPosition: [number, number, number]; scale: number }> = {
  // Dükkan/Eczane sahnesi
  pharmacy: { model: "/models/little-shop.glb", npcPosition: [0, 0, -1], cameraPosition: [0, 2, 5], scale: 1 },
  supermarket: { model: "/models/little-shop.glb", npcPosition: [0, 0, -1], cameraPosition: [0, 2, 5], scale: 1 },
  bakery: { model: "/models/little-shop.glb", npcPosition: [0, 0, -1], cameraPosition: [0, 2, 5], scale: 1 },
  market: { model: "/models/little-shop.glb", npcPosition: [0, 0, -1], cameraPosition: [0, 2, 5], scale: 1 },
};

// GLB Model Yükleyici Bileşeni
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
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

// Loading Spinner (model yüklenirken gösterilecek)
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

// A generic NPC component
function NPC({ isTyping, lastAssistantMessage, position }: { isTyping: boolean, lastAssistantMessage: string | null, position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const npcPos = position || [0, 0, -2];
  
  // Simple idle animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 1;
    }
  });

  return (
    <group position={npcPos}>
      {/* Speech Bubble */}
      {(lastAssistantMessage || isTyping) && (
        <Html position={[0, 2.5, 0]} center zIndexRange={[100, 0]}>
          <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-[280px] shadow-2xl animate-in fade-in zoom-in duration-300">
            {isTyping ? (
              <div className="flex space-x-1.5 items-center justify-center p-2">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
              </div>
            ) : (
              <p className="text-white text-sm font-medium leading-relaxed">
                {lastAssistantMessage}
              </p>
            )}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900/90 border-b border-r border-white/20 rotate-45"></div>
          </div>
        </Html>
      )}

      {/* Basic NPC Body */}
      <mesh ref={meshRef} castShadow>
        <capsuleGeometry args={[0.5, 1, 4, 16]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* Character Head */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#c4b5fd" roughness={0.4} />
      </mesh>
    </group>
  );
}

// Interactive Objects (sadece fallback sahne için)
function InteractiveProp({ position, name, color }: { position: [number, number, number], name: string, color: string }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        castShadow
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color={hovered ? "#a78bfa" : color} 
          emissive={hovered ? "#8b5cf6" : "#000000"} 
          emissiveIntensity={hovered ? 0.5 : 0} 
        />
      </mesh>
      {hovered && (
        <Html position={[0, 0.8, 0]} center>
          <div className="bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-in fade-in slide-in-from-bottom-2">
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}

// Fallback sahne (GLB model olmayan sahneler için eski geometrik ortam)
function FallbackSceneEnvironment({ sceneData }: { sceneData: SceneData | null }) {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.8} />
        <gridHelper args={[20, 20, 0x4c1d95, 0x312e81]} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>
      
      {/* Decorative props based on scenario */}
      <InteractiveProp position={[-2, 0, -1]} name="La Boîte" color="#4f46e5" />
      <InteractiveProp position={[2, 0, -1.5]} name="Le Cube" color="#ec4899" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[0, 3, -4]}>
        <Text
          fontSize={0.5}
          color="#a78bfa"
          anchorX="center"
          anchorY="middle"
        >
          {sceneData?.titleTr || "Sanal Sahne"}
        </Text>
        <Text
          fontSize={0.3}
          color="#ef4444"
          position={[0, -0.6, 0]}
          anchorX="center"
          anchorY="middle"
        >
          DEBUG ID: {sceneData?.id || "NULL"}
        </Text>
      </Float>
    </group>
  );
}

// Ana sahne ortamı — GLB model varsa onu yükler, yoksa fallback geometrik ortamı gösterir
function SceneEnvironment({ sceneData }: { sceneData: SceneData | null }) {
  const sceneId = sceneData?.id || "";
  const modelConfig = SCENE_MODEL_MAP[sceneId];

  // ALWAYS log the mapping resolution for debug
  console.log("SCENE RENDER:", { sceneId, hasConfig: !!modelConfig });

  if (modelConfig) {
    return (
      <React.Fragment>
        <Suspense fallback={<LoadingSpinner />}>
          <GLBModel modelPath={modelConfig.model} scale={modelConfig.scale} />
        </Suspense>
        {/* Force fallback to render at offset to verify BOTH are here if something fails */}
        <group position={[0, -10, 0]}>
           <FallbackSceneEnvironment sceneData={sceneData} />
        </group>
      </React.Fragment>
    );
  }

  return <FallbackSceneEnvironment sceneData={sceneData} />;
}

export function Scene3D({ sceneData, messages, isLoading }: Scene3DProps) {
  // Find last assistant message
  const assistantMessages = messages.filter(m => m.role === 'assistant');
  const lastAssistantMessage = assistantMessages.length > 0 ? assistantMessages[assistantMessages.length - 1].content : null;

  // GLB model varsa kamera ve NPC pozisyonlarını modele göre ayarla
  const sceneId = sceneData?.id || "";
  const modelConfig = SCENE_MODEL_MAP[sceneId];
  const cameraPos = modelConfig?.cameraPosition || [0, 1.5, 4];
  const npcPos = modelConfig?.npcPosition || [0, 0, -2];

  return (
    <div className="absolute inset-0 z-0 bg-slate-950">
      <Canvas shadows camera={{ position: cameraPos as [number, number, number], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={[1024, 1024]} 
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#c084fc" />
        <pointLight position={[3, 3, 3]} intensity={0.3} color="#fbbf24" />
        
        {/* Environment setup */}
        <Environment preset="city" />
        <fog attach="fog" args={['#020617', 5, 20]} />
        
        {/* Main Content */}
        <SceneEnvironment sceneData={sceneData} />
        <NPC isTyping={isLoading} lastAssistantMessage={lastAssistantMessage} position={npcPos as [number, number, number]} />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false} 
          minPolarAngle={Math.PI / 6} 
          maxPolarAngle={Math.PI / 2 + 0.1}
          minDistance={2}
          maxDistance={10}
        />
        <ContactShadows position={[0, -0.49, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
