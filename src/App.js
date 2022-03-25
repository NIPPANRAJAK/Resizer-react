import React, { useRef } from "react";
import "./App.css";
import image from "./image.jpg";
const App = (e) => {
  const boxRef = useRef(null);
  let currentResizer;
  const sizing = (e) => {
    currentResizer = e.target;
    let prevX = e.clientX;
    let prevY = e.clientY;
    window.addEventListener("mousemove", mousemove); 
    window.addEventListener("mouseup", mouseup);
    function mousemove(e) {
      const rect = boxRef.current.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) { 
        boxRef.current.style.width = rect.width - (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        boxRef.current.style.width = rect.width + (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height - (prevY - e.clientY) + "px";
        boxRef.current.style.left = rect.left - (prevX - e.clientX) + "px";
        console.log(rect.left, prevX, e.clientX)
      } else if (currentResizer.classList.contains("ne")) {
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
    }
  };

  return (
    <div className="main">
      <div ref={boxRef} className="item">
        <img className="Image" style={{ width: "100%", height: "100%" }} src={image} />
        <div className="resizer ne" onMouseDown={(e) => sizing(e)}></div>
        <div className="resizer nw" onMouseDown={(e) => sizing(e)}></div>
        <div className="resizer sw" onMouseDown={(e) => sizing(e)}></div>
        <div className="resizer se" onMouseDown={(e) => sizing(e)}></div>
      </div>
    </div>
  );
};
export default App;