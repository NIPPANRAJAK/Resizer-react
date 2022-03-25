import React, { useRef } from "react";
import "./App.css";
import image from "./image.jpg";
const App = (e) => {
  const boxRef = useRef(null);
  const sizing = (e, current) => {
    let prevX = e.clientX;
    let prevY = e.clientY;
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    function mousemove(e) {
      const rect = boxRef.current.getBoundingClientRect();

      if (current === 'se') {
        boxRef.current.style.width = rect.width - (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (current === 'sw') {
        boxRef.current.style.width = rect.width + (prevX - e.clientX) + "px";
        boxRef.current.style.height = rect.height - (prevY - e.clientY) + "px";
        boxRef.current.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (current === "ne") {
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
        <img
          className="Image"
          style={{ width: "100%", height: "100%" }}
          src={image}
          alt="nothig"
        />
        <div className="resizer ne" onMouseDown={(e) => sizing(e, 'ne')}></div>
        <div className="resizer nw" onMouseDown={(e) => sizing(e, 'nw')}></div>
        <div className="resizer sw" onMouseDown={(e) => sizing(e, 'sw')}></div>
        <div className="resizer se" onMouseDown={(e) => sizing(e, 'se')}></div>
      </div>
    </div>
  );
};
export default App;