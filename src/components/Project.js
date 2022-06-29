


const Project = ({textLang}) => {
  return(
    <div className="project p-1  " id="project">
                <div>
                <h2 className="text-center font-semibold mt-6 mb-4 ">{textLang['nav'][3]}</h2>
                </div>
                <div>
                <div className="erenpro w-full">
                    <div className="w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][0]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[30%] text-xs h-[90%] pt-3">
                        {textLang['project'][2]}
                        </div>
                        <div className="w-[70%] bg-[url('img/erenpro.jpg')] bg-center bg-cover rounded-lg h-[90%] px-2 shadow-md shadow-first2">
                        </div>
                    </div>
                    </div>
                </div>
                <div className="coming soon w-full">
                    <div className="w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][3]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[70%] bg-second/75 rounded-lg h-[90%] px-2 text-center pt-14 shadow-md shadow-first2">
                        {textLang['project'][4]}
                        </div>
                        <div className="w-[30%] text-xs h-[90%] ml-1 pt-3">
                        {textLang['project'][5]}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="coming soon w-full">
                    <div className="w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][6]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[30%] text-xs h-[90%] pt-3 ">
                        {textLang['project'][8]}
                        </div>
                        <div className="w-[70%] bg-second/75 rounded-lg h-[90%] px-2 text-center pt-14 shadow-md shadow-first2">
                        {textLang['project'][7]}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
};

export default Project;