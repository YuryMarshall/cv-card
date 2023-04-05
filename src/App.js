import "./App.css";
import React, { useState } from "react";
import Introduce from "./Components/organisms/Introduce.jsx";
import About from "./Components/organisms/About.jsx";
import Skills from "./Components/organisms/Skills.jsx";
import Contact from "./Components/organisms/Contact.jsx";
import Navbar from "./Components/organisms/Navbar.jsx";
import Projects from "./Components/organisms/Projects.jsx";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  return (
    <div className="snap-mandatory font-montser bg-background  snap-y h-screen scroll-smooth overflow-x-hidden overflow-y-auto scrollbar-none font-bold text-3xl text-white">
      <Navbar language={lang} langHandler={setLang} />
      <Introduce language={lang} />
      <About language={lang} />
      <Skills language={lang} />
      <Projects language={lang} />
      <Contact language={lang} />
    </div>
  );
}

export default App;
