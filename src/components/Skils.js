import jsimg from './img/js.png';
import sqlimg from './img/sql.png';
import reactimg from './img/react.png';
import djangoimg from './img/django.png';
import cssimg from './img/css.png';
import pyimg from './img/python.jpeg';
import tbuimg from './img/tableau.png';
import figmaimg from './img/figma.png';

const Skills = () => {
    return (
        <div className="skils flex justify-evenly items-center flex-col w-full  my-4 " id="skills">
                <div className="font-semibold">
                <h2>skills</h2>
                </div>
                <div className="w-[90%] px-2 mx-auto">
                <div className="p-1 flex shadow-sfirst2 rounded-lg">
                    <div className="w-full rounded-lg ring-1 ring-slate-800">
                    <div className="w-[85%] bg-blue-500 rounded-lg py-1">.</div>
                    <div className="absolute top-[112px] w-[80%]">
                        <div className="flex justify-between ">
                        <div>Web Development </div>
                        <div className="flex w-[35%] justify-end scale-90">
                            <img className="w-5 mr-1 h-5 rounded-full" src={sqlimg} alt="javascript" />
                            <img className="w-5 mr-1 h-5 rounded-full" src={reactimg} alt="javascript" />
                            <img className="w-5 mr-1 h-5 rounded-full" src={djangoimg} alt="javascript" />
                            <img className="w-5 mr-1 h-5 rounded-full" src={jsimg} alt="javascript" />
                            <img className="w-5 h-5 rounded-full" src={cssimg} alt="javascript" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="w-[90%] px-2 mx-auto">
                <div className="p-1 flex justify-between shadow-sfirst2 rounded-lg">
                    <div className="w-full rounded-lg ring-1 ring-slate-800">
                    <div className="w-[65%] bg-red-600 rounded-lg py-1">.</div>
                    <div className="absolute top-[149px] w-[80%]">
                        <div className="flex justify-between">
                        <div>Data Science</div>
                        <div className="flex w-[35%] justify-end scale-90">
                            <img className="w-5 mr-1 h-5 rounded-full" src={pyimg} alt="javascript" />
                            <img className="w-5 mr-1 h-5 rounded-full" src={tbuimg} alt="javascript" />
                            <img className="w-5 mr-1 h-5 rounded-full" src={sqlimg} alt="javascript" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="w-[90%] px-2 mx-auto">
                <div className="p-1 flex justify-between shadow-sfirst2 rounded-lg">
                    <div className="w-full rounded-lg ring-1 ring-slate-800">
                    <div className="w-[60%] bg-green-600 rounded-lg py-1">.</div>
                    <div className="absolute top-[190px]  w-[80%]">
                        <div className="flex justify-between ">
                        <div>Machine Learning</div>
                        <div className="flex w-[35%] justify-end scale-90">
                            <img className="w-5 mr-1 h-5 rounded-full" src={pyimg} alt="javascript" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="w-[90%] px-2 mx-auto">
                <div className="p-1 flex justify-between shadow-sfirst2 rounded-lg">
                    <div className="w-full rounded-lg ring-1 ring-slate-800">
                    <div className="w-[25%] bg-slate-400 rounded-lg py-1">.</div>
                    <div className="absolute top-[230px] w-[80%]">
                        <div className="flex justify-between">
                        <div>UX / UI Design</div>
                        <div className="flex w-[35%]  justify-end scale-90">
                            <img className="w-5 mr-1 h-5 rounded-full" src={figmaimg} alt="javascript" />
                            <img className="w-5 mr-1 h-5 rounded-full" src={cssimg} alt="javascript" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Skills;