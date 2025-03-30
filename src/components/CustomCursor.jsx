import { useEffect, useState } from 'react';

const CustomCursor = () => {
  // State untuk cursor
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [scale, setScale] = useState(1);
  const [ripples, setRipples] = useState([]);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  // Magnetic effect variables
  const magneticStrength = 30;

  // Deteksi perangkat mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Efek cursor hanya untuk desktop
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      // Throttle updates untuk performa
      if (Math.abs(e.clientX - lastX) < 5 && Math.abs(e.clientY - lastY) < 5) return;
      
      lastX = e.clientX;
      lastY = e.clientY;

      animationFrameId = requestAnimationFrame(() => {
        // Magnetic effect
        let newX = e.clientX;
        let newY = e.clientY;
        
        const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
        if (hoverElement?.closest('.magnetic')) {
          const rect = hoverElement.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
          const distance = Math.min(
            magneticStrength,
            Math.hypot(e.clientX - centerX, e.clientY - centerY)
          );
          
          newX = centerX + Math.cos(angle) * distance;
          newY = centerY + Math.sin(angle) * distance;
        }

        setPosition({ x: newX, y: newY });
        if (!visible) setVisible(true);
        
        // Trail effect - keep last 3 positions untuk performa
        setTrail(prev => [...prev.slice(-3), { x: newX, y: newY, id: Date.now() }]);
        
        // Check if hovering clickable element
        setIsPointer(
          window.getComputedStyle(hoverElement).getPropertyValue('cursor') === 'pointer' ||
          hoverElement?.closest('a, button, [role="button"]')
        );
      });
    };

    // Click handler untuk ripple effect
    const handleClick = (e) => {
      if (isMobile) return;
      setRipples(prev => [...prev, {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      }]);
    };

    // Hover scale effect
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-scale')) {
        setScale(1.5);
      }
    };
    
    const handleMouseOut = () => setScale(1);
    const handleMouseDown = () => setScale(0.8);
    const handleMouseUp = () => setScale(1);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile, visible]);

  // Remove old ripples after animation completes
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  if (isMobile) return null;

  return (
    <>
      {/* Trail elements - dikurangi jadi 3 untuk performa */}
      {trail.map((pos, i) => (
        <div
          key={`trail-${pos.id}-${i}`}
          className="fixed pointer-events-none rounded-full bg-white/5 backdrop-blur-sm border border-white/10 z-[9998]"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${20 - i * 5}px`,
            height: `${20 - i * 5}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.5 - (i * 0.15),
            transition: 'all 0.1s linear',
            willChange: 'transform, opacity'
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.15s ease-out',
          willChange: 'transform'
        }}
      >
        <div className={`relative flex items-center justify-center 
          ${isPointer ? 'w-6 h-6' : 'w-5 h-5'} 
          transition-all duration-200`}
        >
          <div className={`absolute inset-0 rounded-full backdrop-blur-md 
            ${isPointer ? 'bg-blue-400/30' : 'bg-white/10'} 
            border ${isPointer ? 'border-blue-400/50' : 'border-white/20'} 
            shadow-sm transition-all duration-200`}
          />
          <div className={`absolute rounded-full 
            ${isPointer ? 'bg-white w-1.5 h-1.5' : 'bg-white/80 w-1 h-1'}`}
          />
        </div>
      </div>

      {/* Click ripples - simplified */}
      {ripples.map((ripple) => (
        <div
          key={`ripple-${ripple.id}`}
          className="fixed pointer-events-none rounded-full bg-white/20 backdrop-blur-sm z-[9997]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '30px',
            height: '30px',
            transform: 'translate(-50%, -50%) scale(0)',
            animation: 'ripple 0.6s linear forwards',
            willChange: 'transform, opacity'
          }}
        />
      ))}

      {/* Global styles */}
      <style jsx global>{`
        @media (pointer: fine) {
          html, body, a, button {
            cursor: none !important;
          }
        }
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;