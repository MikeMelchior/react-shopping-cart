import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div >
      <h1>Hello World, if you want to visit the shop <Link to={'/shop'}>Click Here</Link></h1>
    </div>
  );
}

export default App;
