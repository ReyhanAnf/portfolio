import { useState } from 'react';
import './final.css';
import Nav from './Nav.js';

import Navbar from './Navbar';
import Introjust from './Introjust';


function Hero({lang, setLang, textLang}) {
    let [nav,setNav] = useState(false);
  return (
     <div classname="nav-hero h-[55%] bg-first">
        <div classname="flex flex-col h-full ">
            
            <Navbar nav={nav} setNav={setNav} />
            <Introjust lang={lang} setLang={setLang} textLang={textLang}/>
            
        </div>
        
        <Nav nav={nav} lang={lang} setLang={setLang} textLang={textLang}/>
    </div>
  );
}

export default Hero;
