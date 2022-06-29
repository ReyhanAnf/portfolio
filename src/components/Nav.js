const Nav = ({ nav, textLang }) => {
    return(
        <div className={`${nav ? '' : '-translate-x-96 -translate-y-96 scale-0'} fixed w-[300px]  mx-10 my-7  rounded-xl bg-slate-400/50 z-30 backdrop-blur-md top-0 transition-all duration-200`}>
            <div className="flex flex-row justify-around items-center z-40 flex-wrap">
                <div className="w-[40%] h-12 bg-second rounded-lg mx-auto my-4 text-center items-center px-2 py-1 shadow-inner text-sm font-semibold">
                <a href="/">{textLang['nav'][0]}</a>
                </div>
                <div className="w-[40%] h-12 bg-second rounded-lg mx-auto my-4 text-center items-center px-2 py-1 shadow-inner text-sm font-semibold">
                <a href="#skills">{textLang['nav'][1]}</a>
                </div>
                <div className="w-[40%] h-12 bg-second rounded-lg mx-auto my-4 text-center items-center px-2 py-1 shadow-inner text-sm font-semibold">
                <a href="#eksperience">{textLang['nav'][2]}</a>
                </div>
                <div className="w-[40%] h-12 bg-second rounded-lg mx-auto my-4 text-center items-center px-2 py-1 shadow-inner text-sm font-semibold">
                <a href="#project">{textLang['nav'][3]}</a>
                </div>
                <div className="w-[40%] h-12 bg-second rounded-lg mx-auto my-4 text-center items-center px-2 py-1 shadow-inner text-sm font-semibold">
                <a href="#blog">{textLang['nav'][4]}</a>
                </div>
                <div className="w-[40%] h-12 bg-second rounded-lg mx-auto my-4 text-center items-center px-2 py-1 shadow-inner text-sm font-semibold">
                <a href="#contact">{textLang['nav'][5]}</a>
                </div>
            </div>
         </div>


    )
}

export default Nav;