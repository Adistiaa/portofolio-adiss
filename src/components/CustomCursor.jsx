import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  // Deteksi perangkat (SSR compatible)
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(
        !window.matchMedia("(pointer: coarse)").matches && 
        window.innerWidth > 768
      );
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Efek untuk desktop
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
      setIsPointer(
        hoverElement?.closest('a, button, [role="button"], [data-cursor-pointer]')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform'
        }}
      >
        <div 
          className={`rounded-full transition-all duration-100
            ${isPointer ? 'w-7 h-7' : 'w-5 h-5'}`}
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            transition: 'all 100ms ease-out'
          }}
        />
      </div>

      <style jsx global>{`
        @media (pointer: fine) and (min-width: 769px) {
          * {
            cursor: none !important;
          caret-color: transparent;
          scrollbar-color: transparent transparent;
          scrollbar-width: none;
          // background: rgba(20, 20, 20, 0.4);
          // border: 1px solid rgba(255, 255, 255, 0.6); --> Testing Grid Web <---
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;