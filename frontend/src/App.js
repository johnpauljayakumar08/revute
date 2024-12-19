import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Banner  from "./Component/landing/banner";

import ServicesSection from "./Component/landing/services";

import Mop from "./Component/landing/meet our professor";
import Mainfooter from "./Component/landing/mainfooter";
import HeroSection from "./Component/landing/banking sales/HeroSection";
import ProgramOverview from "./Component/landing/banking sales/ProgramOverview";
import Benefits from "./Component/landing/banking sales/Benefits";

// import RichTextEditor from './Component/Instructor/Richtexteditor/Richtexteditor';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={[<Banner/>,<ServicesSection/>,<Mop/>,<Mainfooter/>]} />
          <Route path="/bspm" element={[<HeroSection/>,<ProgramOverview/>,<Benefits/>,<Mainfooter/>]} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
