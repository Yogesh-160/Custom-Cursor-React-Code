import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {/* Conditionally render the cursor animation on large screens */}
      {isLargeScreen && (
        <div className="cursor">
          <AnimatedCursor
            innerSize={15} // Size of the inner dot
            outerSize={30} // Size of the outer circle
            color="150, 191, 47" // Custom color (RGB values)
            outerAlpha={0.2} // Opacity of the outer circle
            innerScale={0.7} // Scaling effect for inner dot
            outerScale={2.3} // Scaling effect for outer circle
            clickables={[
              // Specify clickable elements (e.g., links, buttons)
              'a',
              'input[type="text"]',
              // Add more selectors as needed
            ]}
          />
        </div>
      )}
    </div>
  );
}
