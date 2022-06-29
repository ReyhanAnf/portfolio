import { useState } from "react";

import Skills from "./Skils";
import Experience from "./Experience";
import Blog from "./Blog";
import Project from "./Project";
import Contact from "./Contact";


const Content = ({textLang}) => {
    let [sel, setSel] = useState(false);
    return(
        <div  className={`${ sel ? 'h-[90%] -translate-y-[40%]' : 'h-[75%] -translate-y-[5%]'} isi nav-hero bottom-0  transition-all duration-75 bg-second/90 shadow-xl shadow-first2 rounded-t-3xl relative overflow-y-scroll`}>
            <div>
                <button onClick={()=>{setSel(!sel)}} className={` selengkapnya w-[30%] h-2 bg-slate-500 rounded-md mx-auto mt-2 flex self-center`} />
                <div className="text-center text-xs text-slate-600 "><small>selengkapnya</small></div>
            </div>

            <div className="search flex flex-row justify-evenly">
                <div className="rounded-md shadow-sfirst1 ">
                <input type="search" className="border-2 border-first px-1 rounded-md" name="search" id="search" />
                </div>
                <div>
                <button className="bg-slate-800 py-1 px-2 rounded-md text-first -mt-2 shadow-sfirst2">Cari</button>
                </div>
            </div>


            <Skills />
            <Experience textLang={textLang}/>
            <Blog textLang={textLang}/>
            <Project textLang={textLang}/>
            <Contact textLang={textLang}/>


            <div>
                <div className="footer text-center text-sm p-1">
                {textLang['credit'][0]} <b>{textLang['credit'][1]}</b>
                </div>
                <div className="footer text-center text-sm p-1">
                {textLang['credit'][2]} <br /> <b>{textLang['credit'][3]}</b>
                </div>
            </div>
        </div>
    )
}

export default Content