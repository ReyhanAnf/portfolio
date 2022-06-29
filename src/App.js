import React, { useState } from 'react';
import Hero from './components/Hero';
import Content from './components/Content';

import text_data from './data';


function App() {
  let [lang, setLang] = useState(false);
  
  let bahasa = text_data['indonesia'];
  let language = text_data['inggris'];
  return (
    <div className="App h-screen bg-first2/75 shadow-xl overflow-hidden  mx-auto bg-gradient-to-b from-first2 to-first">
      <Hero lang={lang} setLang={setLang} textLang={lang ? bahasa : language}/>
      <Content textLang={lang ? bahasa : language}/>
    </div>
  );
}

export default App;
