import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create confetti particles
    const newParticles = [];
    const colors = ['#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#8b5cf6', '#06b6d4'];
    
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        shape: Math.random() > 0.5 ? 'circle' : 'square'
      });
    }
    
    setParticles(newParticles);

    // Animate particles
    const animate = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          rotation: particle.rotation + particle.rotationSpeed,
          x: particle.x + Math.sin(particle.y * 0.01) * 0.5
        })).filter(particle => particle.y < window.innerHeight + 100)
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: particle.shape === 'circle' ? '50%' : '2px',
            transform: `rotate(${particle.rotation}deg)`,
            opacity: 0.8,
            boxShadow: `0 0 ${particle.size / 2}px ${particle.color}40`
          }}
        />
      ))}
    </div>
  );
};

export default Confetti; 