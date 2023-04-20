import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";



const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/shop' Component={Shop} />
      </Routes>
    </HashRouter>
  )
}

export default Router