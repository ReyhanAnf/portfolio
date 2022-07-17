import { useEffect, useState } from "react";

const Experience = ({textLang}) => {
    let [kol, setKol] = useState(0);
    let [kval, setKval] = useState(0);

    let autoSlide = true;
    let slideInterval;
    let [intervalTime, setIntervalTime] = useState(5000);

    function nextSlide(){
        if(kol <= 10){
        setKol(kol+1);
        }else if(kol > 10){
            setKol(0)
        }
        setKval(kol%4);
    }

    function autoS(){
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(()=>{
        setKval(0)
    },[])

    useEffect(()=>{
        if(autoSlide){
            autoS();
        }
        return () => clearInterval(slideInterval)
    }, [kol])

    return(
        <div className="eksperience" id="eksperience">
            <div>
            <h2 className="text-center font-semibold my-4">{textLang['nav'][2]}</h2>
            
            </div>
            <div className="boxeks w-[90%] h-[8em] bg-first flex rounded-lg mx-auto   my-3 shadow-sfirst2">
                <div className="isieks w-full flex h-[94%] transition-all duration-300">
                    <div onClick={()=>{nextSlide()}} onDoubleClick={()=>{setIntervalTime(50)}} className="w-[75%] h-[90%] bg-second rounded-lg my-2 mx-auto flex text-center items-center shadow-inner shadow-first2">
                         {textLang['exp'][kval]}
                    </div>
                    
                    <div className="w-[20%] h-[90%] flex flex-wrap justify-between mx-auto items-center my-2">
                    <div onClick={()=>{setKol(0)}} className={`${kol === 0 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(4)}} className={`${kol === 4 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(1)}} className={`${kol === 1 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(2)}} className={`${kol === 2 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(8)}} className={`${kol === 8 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(5)}} className={`${kol === 5 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(6)}} className={`${kol === 6 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(9)}} className={`${kol === 9 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    <div onClick={()=>{setKol(10)}} className={`${kol === 10 ? 'bg-slate-200':'bg-slate-700'} i w-[30%] h-[30%] rounded-sm hover:shadow-sfirst2`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;