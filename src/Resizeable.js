import React, { useRef } from "react";
import "./App.css";
export const Resizeable = (e) => {
  // const [isResizing, setIsResizing] = useState(false);
  // const resizerRef = useRef(null);
  const boxRef = useRef(null);// access node  for resizing dimensions
  let currentResizer;
  const sizing = (e) => {
    currentResizer = e.target; //to target the perticuler div
    let prevX = e.clientX; // set current dimension
    let prevY = e.clientY;
    window.addEventListener("mousemove", mousemove);//move mouse 
    window.addEventListener("mouseup", mouseup);//release mouse
    function mousemove(e) {
      const rect = boxRef.current.getBoundingClientRect();// set whole dimenssion of full div

      if (currentResizer.classList.contains("se")) { //.classList for access all the class  name and .contains to specify the perti cular calssname
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

      prevX = e.clientX;// again set the current s axis
      prevY = e.clientY;
    }
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);// for unstick the mouse move
      window.removeEventListener("mouseup", mouseup);// for unstick the mouseup
    }
  };

  return (
    <div className="main">
      <div ref={boxRef} className="item">
        <div className="resizer ne" onMouseDown={(e) => sizing(e)}></div>
        <div className="resizer nw" onMouseDown={(e) => sizing(e)}></div>
        <div className="resizer sw" onMouseDown={(e) => sizing(e)}></div>
        <div className="resizer se" onMouseDown={(e) => sizing(e)}></div>
      </div>
    </div>
  );
};
// export default Resizeable;