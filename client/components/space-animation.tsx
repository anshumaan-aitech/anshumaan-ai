import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export function SpaceAnimation() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Generate stars with performance consideration
    const generateStars = () => {
      const starCount = window.innerWidth < 768 ? 30 : 50; // Fewer stars on mobile
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 20 + 10,
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
              "radial-gradient(circle at 20% 20%, #1e1b4b 0%, #000000 50%)",
              "radial-gradient(circle at 80% 80%, #312e81 0%, #000000 50%)",
              "radial-gradient(circle at 40% 60%, #1e1b4b 0%, #000000 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute inset-0"
          style={{ willChange: "background" }}
        />

        {/* Stars */}
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
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute top-1/4 w-2 h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60"
          style={{ willChange: "transform, opacity" }}
        />

        <motion.div
          animate={{
            x: ["100%", "-100%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
            repeatType: "loop"
          }}
          className="absolute top-3/4 w-1 h-24 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-40"
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Exploring the <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Universe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Just like stars in the cosmos, every line of code contributes to something greater. 
            Let's build the future together, one innovation at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
