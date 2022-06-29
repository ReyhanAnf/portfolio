import igimg from './img/instagram.svg';

const Contact = ({textLang}) => {
    return(
        <div className="contactme w-full" id="contact">
            <div>
            <h2 className="text-center font-semibold mt-6 mb-4">Contact Me</h2>
            </div>
            <div>
            <div className="w-[90%] bg-first/50 flex rounded-lg mx-auto  my-3 text-center px-3 py-4 items-center text-lg shadow-sfirst2">
            {textLang['contact'][0]}
            </div>
            <div className="w-[90%] flex justify-between mx-auto ">
                <div className="bg-first w-16 h-16  rounded-md p-2 group shadow-sfirst2">
                <svg className="group-hover:scale-90 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                </div>
                <div className="bg-first w-16 h-16  rounded-md p-2 group shadow-sfirst2">
                <img className="group-hover:scale-90 transition-all duration-300" src={igimg} alt="instagram" />
                </div>
                <div className="bg-first w-16 h-16 rounded-md p-2 group shadow-sfirst2">
                <svg className="group-hover:scale-90 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" /></svg>
                </div>
            </div>
            </div>
        </div>
    )
  };
  
  export default Contact;