import React, { useState } from 'react';
import Hero from './components/Hero';
import Content from './components/Content';

import text_data from './data';


function App() {
  let [lang, setLang] = useState(false);
  
  let bahasa = text_data['indonesia'];
  let language = text_data['inggris'];
  let [sel, setSel] = useState(false);
  return (
    <div className="App h-screen overflow-hidden md:overflow-auto mx-auto bg-gradient-to-b from-first to-first2">
      <Hero setSel={setSel} sel={sel} lang={lang} setLang={setLang} textLang={lang ? bahasa : language}/>
      <Content setSel={setSel} sel={sel} textLang={lang ? bahasa : language}/>
    </div>
  );
}

export default App;
