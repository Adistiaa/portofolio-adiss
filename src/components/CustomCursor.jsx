import { useEffect, useState } from 'react';

const CustomCursor = () => {
  // Cursor position state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [scale, setScale] = useState(1);
  const [ripples, setRipples] = useState([]);
  const [isPointer, setIsPointer] = useState(false);

  // Magnetic effect variables
  const magneticStrength = 30;
  const magneticElements = document.querySelectorAll('.magnetic');

  useEffect(() => {
    // Main mouse movement handler
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Magnetic effect
      let newX = clientX;
      let newY = clientY;
      
      const hoverElement = document.elementFromPoint(clientX, clientY);
      if (hoverElement?.closest('.magnetic')) {
        const rect = hoverElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(clientY - centerY, clientX - centerX);
        const distance = Math.min(
          magneticStrength,
          Math.hypot(clientX - centerX, clientY - centerY)
        );
        
        newX = centerX + Math.cos(angle) * distance;
        newY = centerY + Math.sin(angle) * distance;
      }

      setPosition({ x: newX, y: newY });
      
      // Trail effect - keep last 5 positions
      setTrail(prev => [...prev.slice(-4), { x: newX, y: newY, id: Date.now() }]);
      
      // Check if hovering clickable element
      setIsPointer(
        window.getComputedStyle(hoverElement).getPropertyValue('cursor') === 'pointer' ||
        hoverElement?.closest('a, button, [role="button"]')
      );
    };

    // Click handler for ripple effect
    const handleClick = (e) => {
      setRipples(prev => [...prev, {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      }]);
    };

    // Hover scale effect
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-scale')) {
        setScale(1.8);
      }
    };
    
    const handleMouseOut = () => setScale(1);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Remove old ripples after animation completes
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <>
      {/* Trail elements */}
      {trail.map((pos, i) => (
        <div
          key={`trail-${pos.id}-${i}`}
          className="fixed pointer-events-none rounded-full bg-white/5 backdrop-blur-sm border border-white/10 z-50"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${24 - i * 4}px`,
            height: `${24 - i * 4}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 1 - (i * 0.2),
            transition: 'all 0.1s linear'
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${scale})`
        }}
      >
        <div className={`relative flex items-center justify-center 
          ${isPointer ? 'w-6 h-6' : 'w-8 h-8'} 
          transition-all duration-300`}
        >
          <div className={`absolute inset-0 rounded-full backdrop-blur-lg 
            ${isPointer ? 'bg-blue-400/30' : 'bg-white/10'} 
            border ${isPointer ? 'border-blue-400/50' : 'border-white/20'} 
            shadow-lg transition-all duration-300`}
          />
          <div className={`absolute rounded-full 
            ${isPointer ? 'bg-white w-1.5 h-1.5' : 'bg-white/80 w-2 h-2'}`}
          />
        </div>
      </div>

      {/* Click ripples */}
      {ripples.map((ripple) => (
        <div
          key={`ripple-${ripple.id}`}
          className="fixed pointer-events-none rounded-full bg-white/20 backdrop-blur-md z-50"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '40px',
            height: '40px',
            transform: 'translate(-50%, -50%) scale(0)',
            animation: 'ripple 0.6s linear forwards'
          }}
        />
      ))}

      {/* Global styles (inject once) */}
      <style jsx global>{`
        html, body, a, button {
          cursor: none !important;
        }
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;