import { motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus, Float, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

function FloatingCube({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  return (
    <Float
      speed={speed}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 2]}
    >
      <Box position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Box>
    </Float>
  );
}

function FloatingSphere({ position, color, size, speed }: { position: [number, number, number], color: string, size: number, speed: number }) {
  return (
    <Float
      speed={speed}
      rotationIntensity={1.5}
      floatIntensity={1}
      floatingRange={[0, 1]}
    >
      <Sphere position={position} args={[size, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.9} 
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  return (
    <Float
      speed={speed}
      rotationIntensity={2}
      floatIntensity={3}
      floatingRange={[0, 3]}
    >
      <Torus position={position} args={[0.3, 0.1, 16, 100]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Torus>
    </Float>
  );
}

function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />

      {/* Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* 3D Objects */}
      <FloatingSphere position={[-3, 2, 0]} color="#4f46e5" size={0.3} speed={1.5} />
      <FloatingSphere position={[4, -1, -2]} color="#06b6d4" size={0.2} speed={2} />
      <FloatingSphere position={[-1, -3, 1]} color="#8b5cf6" size={0.25} speed={1.2} />
      
      <FloatingCube position={[2, 3, -1]} color="#f59e0b" speed={1.8} />
      <FloatingCube position={[-4, -2, 2]} color="#10b981" speed={1.3} />
      <FloatingCube position={[1, -1, -3]} color="#ef4444" speed={2.2} />
      
      <FloatingTorus position={[3, 1, 2]} color="#ec4899" speed={1.7} />
      <FloatingTorus position={[-2, 2, -1]} color="#84cc16" speed={1.4} />
      <FloatingTorus position={[0, -2, 3]} color="#f97316" speed={1.9} />

      {/* Larger central object */}
      <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group>
          <Sphere position={[0, 0, 0]} args={[0.8, 64, 64]}>
            <meshStandardMaterial 
              color="#4338ca" 
              metalness={1}
              roughness={0}
              emissive="#4338ca"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </Sphere>
          <Torus position={[0, 0, 0]} args={[1.2, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial 
              color="#06b6d4" 
              metalness={0.8}
              roughness={0.2}
              emissive="#06b6d4"
              emissiveIntensity={0.4}
            />
          </Torus>
        </group>
      </Float>

      {/* Environment for reflections */}
      <Environment preset="night" />
    </>
  );
}

export function SpaceAnimation() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Generate background stars with performance consideration
    const generateStars = () => {
      const starCount = window.innerWidth < 768 ? 20 : 40;
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 15 + 10,
        });
      }
      
      setStars(newStars);
    };

    generateStars();

    // Regenerate stars on resize (debounced)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(generateStars, 250);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-24 bg-black dark:bg-black overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #1e1b4b 0%, #000000 70%)",
              "radial-gradient(circle at 80% 80%, #312e81 0%, #000000 70%)",
              "radial-gradient(circle at 40% 60%, #1e1b4b 0%, #000000 70%)",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute inset-0"
          style={{ willChange: "background" }}
        />

        {/* 3D Canvas */}
        <div className="absolute inset-0 opacity-80">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={null}>
              <Scene3D />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Additional 2D stars for layering */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: star.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
              repeatType: "loop"
            }}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          />
        ))}

        {/* Floating cosmic elements */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute top-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-40"
          style={{ willChange: "transform, opacity" }}
        />

        <motion.div
          animate={{
            x: ["100%", "-100%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 8,
            repeatType: "loop"
          }}
          className="absolute top-3/4 w-1 h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30"
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Exploring the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Universe</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Just like stars in the cosmos, every line of code contributes to something greater. 
            Let's build the future together, one innovation at a time.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
              Interactive 3D space environment - the objects above respond to your mouse movement
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
