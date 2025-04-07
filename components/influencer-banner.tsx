import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function InfluencerBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = 320;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Social media icons and symbols
    const icons = [
      "♥", // Heart
      "👍", // Like
      "⭐", // Star
      "💬", // Comment
      "🔁", // Share
      "📷", // Photo
      "🎥", // Video
      "✨", // Sparkle
    ];

    class Particle {
      x: number = 0;
      y: number = 0;
      icon: string = "";
      size: number = 0;
      baseSize: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      pulseSpeed: number = 0;
      pulsePhase: number = 0;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.icon = icons[Math.floor(Math.random() * icons.length)];
        this.baseSize = Math.random() * 16 + 12; // Base size between 12 and 28
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.5; // Slower movement
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        if (!canvas) return;
        
        // Pulsing size effect
        this.pulsePhase += this.pulseSpeed;
        this.size = this.baseSize + Math.sin(this.pulsePhase) * 2;
        
        // Floating movement
        this.x += Math.sin(this.pulsePhase * 0.5) * 0.2 + this.speedX;
        this.y += Math.cos(this.pulsePhase * 0.5) * 0.2 + this.speedY;

        // Wrap around edges with fade
        if (this.x > canvas.width + 50) this.x = -50;
        else if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        else if (this.y < -50) this.y = canvas.height + 50;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Add glow effect
        ctx.shadowColor = "rgba(147, 51, 234, 0.5)";
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        
        // Draw the icon
        ctx.fillText(this.icon, this.x, this.y);
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) { // Reduced number for better performance
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(147, 51, 234, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Fade out connections based on distance
            const opacity = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] overflow-hidden bg-gradient-to-br from-[#1E0B4B] via-[#2D1B5A] to-[#3B2A69]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-[320px] mix-blend-plus-lighter"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E0B4B]/50 to-[#1E0B4B]/90"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
        >
          Connect with Influencers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-200 mb-8 text-center max-w-2xl"
        >
          Discover and collaborate with top creators in your industry
        </motion.p>
      </motion.div>
    </div>
  );
} 