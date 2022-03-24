import React, { useState, useRef } from 'react';
import style from "./App.css"
const App = (e) => {
  const [isResizing, setIsResizing] = useState(false)
  const resizerRef = useRef(null)
  const el = document.querySelector(".item");
  el.addEventListener("mousedown", mousedown);

  const mousedown=()=>{
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);
  let prevX = e.clientX;
  let prevY = e.clientY;

  const mousemove=(e)=>{
    if(!isResizing){
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      const rect = el.getBoundingClientRect();

      el.style.left = rect.left - newX+prevX;
      el.style.top = rect.top - newY+prevX;

      prevX = e.clientX;
      prevY = e.clientY;
    }
  }
  
  const mouseup = ()=>{
    window.removeEventListener("mousemove", mousemove)
    window.removeEventListener("mouseup", mouseup)
  }
}

  const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  const mousedown =(e)=>{
    currentResizer=e.target;
    setIsResizing(true);

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    const mousemove=(e)=>{
      const rect = el.getBoundingClientRect();

      if(currentResizer){
      
      }

      const mouseup=()=>{
       window.removeEventListener("mousemove", mousemove)
       window.removeEventListener("mouseup", mouseup);
       setIsResizing(false)
      }
    }
  }
}

 return (
    <div class="item">
     <div ref={resizerRef} class="resizer ne"></div>
     <div class="resizer nw"></div>
     <div class="resizer sw"></div>
     <div class="resizer se"></div>
   </div>
  )
}
export default App;