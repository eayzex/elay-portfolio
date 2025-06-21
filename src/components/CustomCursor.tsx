
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-hover')) {
        setIsHovering(true);
        setCursorType(target.dataset.cursorType || 'hover');
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-hover')) {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          transform: isHovering ? 'scale(0)' : 'scale(1)',
        }}
      />
      <div 
        className="cursor-outline"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          background: isHovering ? 'rgba(13, 148, 136, 0.1)' : 'transparent',
        }}
      />
      {cursorType === 'code' && (
        <div 
          className="fixed pointer-events-none z-50 text-teal-400 text-sm font-mono"
          style={{ left: position.x + 20, top: position.y - 10 }}
        >
          {'</>'}
        </div>
      )}
    </>
  );
};

export default CustomCursor;
