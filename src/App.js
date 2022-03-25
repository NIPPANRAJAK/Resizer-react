import React, { useState } from "react";
import {Resizeable} from "./Resizeable";
import image from "./image.jpg";
import "./App.css";
const App = () => {
  return (
    <Resizeable>
      <img className="Image"  src={image} />
    </Resizeable>
  );
};

export default App;
