
const Experience = ({textLang}) => {
    return(
        <div className="eksperience" id="eksperience">
            <div>
            <h2 className="text-center font-semibold my-4">{textLang['nav'][2]}</h2>
            </div>
            <div className="boxeks w-[90%] h-[8em] bg-first flex rounded-lg mx-auto   my-3 shadow-sfirst2">
                <div className="isieks w-full flex h-[94%] transition-all duration-300">
                    <div className="w-[75%] h-[90%] bg-second rounded-lg my-2 mx-auto flex text-center items-center shadow-inner shadow-first2">
                    {textLang['exp'][0]}
                    </div>
                    <div className="hidden w-[75%] h-[90%] bg-second rounded-lg my-2 mx-auto flex text-center items-center">
                    {textLang['exp'][1]}
                    </div>
                    <div className="hidden w-[75%] h-[90%] bg-second rounded-lg my-2 mx-auto flex text-center items-center">
                    {textLang['exp'][2]}
                    </div>
                    <div className="hidden w-[75%] h-[90%] bg-second rounded-lg my-2 mx-auto flex text-center items-center">
                    {textLang['exp'][3]}
                    </div>
                    <div className="w-[20%] h-[90%] flex flex-wrap justify-between mx-auto items-center my-2">
                    <div className="i w-[30%] h-[30%] bg-slate-200 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    <div className="i w-[30%] h-[30%] bg-slate-700 rounded-sm hover:shadow-sfirst2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;