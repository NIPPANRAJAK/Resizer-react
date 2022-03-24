import React, { useState, useRef } from "react";
import "./App.css";
const App = (e) => {
  const [isResizing, setIsResizing] = useState(false);
  const resizerRef = useRef(null);
  const boxRef = useRef(null);
  const currentResizerRef = useRef(null);
  const sizing = (e) => {
    console.log("hellooo");
    currentResizerRef.current = e.target;
    setIsResizing(true);
    let prevX = e.clientX;
    let prevY = e.clientY;
    
    function mousemove(e) {
      const rect = boxRef.current.getBoundingClientRect();
      console.log(rect, "lola");

      if (currentResizerRef.current.classList.contains("se")) {
        boxRef.current.style.width = rect.width - (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizerRef.current.classList.contains("sw")) {
        boxRef.current.style.width = rect.width + (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height - (prevY - e.clientY) + "px";
        boxRef.current.style.left = rect.left - (prevX - e.clientX) + "px";
        console.log(rect.left)
      } else if (currentResizerRef.current.classList.contains("ne")) {
        boxRef.current.style.width = rect.width - (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height + (prevY - e.clientY) + "px";
        boxRef.current.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        boxRef.current.style.width = rect.width + (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height + (prevY - e.clientY) + "px";
        boxRef.current.style.top = rect.top - (prevY - e.clientY) + "px";
        boxRef.current.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      setIsResizing(false);
      boxRef.current=null
    }

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
  };

  return (
    <div ref={boxRef} className="item">
      <div className="resizer ne" onMouseDown={(e) => sizing(e)}></div>
      <div className="resizer nw" onMouseDown={(e) => sizing(e)}></div>
      <div className="resizer sw" onMouseDown={(e) => sizing(e)}></div>
      <div className="resizer se" onMouseDown={(e) => sizing(e)}></div>
    </div>
  );
};
export default App;