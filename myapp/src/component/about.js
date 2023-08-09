import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./About";



export default function RouterConfig() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<ProductClass />} />
   <Route path="/product" element={<ProductClass />} />
   <Route path="/about" element={<About/>} />
   </Routes>
   </BrowserRouter>

  );
}