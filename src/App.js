import { useContext } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import { MouseContext } from "./context/mouse-context";

import {
  Route,
  Routes,
} from "react-router-dom";

import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resource from "./components/Resource";

import ResourceDetail from "./components/ResourceDetail";
import PopularItems from "./components/PopularItems";

function App() {
  const {
    cursorChangeHandler,
    cursorClickHandler,
  } = useContext(MouseContext);
  
  return (
    <div className="App">
      <Cursor />
      <div onClick={cursorClickHandler} className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Header />
        </div>
        <Routes>
          {/* Routes */}
          <Route index element={<Home />} />
          <Route path="/:resource/:id" element={<ResourceDetail />} />
          <Route path=":resource" element={<Resource />} />
          <Route path="popular" element={<PopularItems/>}></Route>
          {/* 404 page */}
          <Route path=":resource/null" element={<PageNotFound/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
