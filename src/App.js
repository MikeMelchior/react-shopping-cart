import React from "react";
import TestRoute from "./TestRoute";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      Hello World, if you want to visit the test <Link to={'/test'} >Click Here</Link>
    </div>
  );
}

export default App;
