const Blog = ({textLang}) => {
    return(
        <div className="Blog p-1" id="blog">
            <div>
            <h2 className="text-center font-semibold mt-6 mb-4 ">{textLang['exp'][4]}</h2>
            </div>
            <div className="coming soon w-full">
            <div className="w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                <div className="text-center ">
                <h2>Erentech - Rinfonet</h2>
                </div>
                <div className="flex flex-row h-full p-2 group">
                <div className= {`w-[100%] bg-[url('img/erentech.jpg')] bg-center bg-cover bg-scroll rounded-lg h-[90%] px-2 flex items-center group-hover:bg-opacity-75 shadow-inner shadow-first2`}>
                    <button onClick={()=>{window.location = 'https://erentech.my.id'}} className="mx-auto bg-first px-3 py-2 rounded-lg w-24 h-10 hover:scale-90 transition-all duration-300 shadow-md shadow-first2">{textLang['blog'][0]}</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
  };
  
  export default Blog;