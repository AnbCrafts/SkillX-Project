import React, { useEffect, useRef } from "react";
import './CustomCursor.css'

const CustomCursor = () => {
  const cursorRef1 = useRef(null);
  const cursorRef2 = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursorStyle = `left: ${e.clientX}px; top: ${e.clientY}px;`;
      if (cursorRef1.current) cursorRef1.current.style.cssText = cursorStyle;
      if (cursorRef2.current) cursorRef2.current.style.cssText = cursorStyle;
    };

    // Add event listener for mousemove
    document.addEventListener("mousemove", moveCursor);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef1}></div>
      <div id="cursor2" ref={cursorRef2}></div>
    </>
  );
};

export default CustomCursor;
