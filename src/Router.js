import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TestRoute from "./TestRoute";



const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={App} />
        <Route path="/test" Component={TestRoute} />
      </Routes>
    </HashRouter>
  )
}

export default Router