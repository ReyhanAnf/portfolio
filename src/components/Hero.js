import { useState } from 'react';
import './final.css';
import Nav from './Nav.js';

import Navbar from './Navbar';
import Introjust from './Introjust';


function Hero({setSel, sel, lang, setLang, textLang}) {
    let [nav,setNav] = useState(false);
    
  return (
     <div className="nav-hero h-screen md:h-auto bg-first">
        <div className="flex flex-col h-full ">
            
            <Navbar nav={nav} setNav={setNav} />
            <Introjust setSel={setSel} sel={sel} lang={lang} setLang={setLang} textLang={textLang}/>
            
        </div>
        
        <Nav nav={nav} lang={lang} setLang={setLang} textLang={textLang}/>
    </div>
  );
}

export default Hero;
