//import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
//import { IconContext } from "react-icons";




function Dark() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }


  return (
       <>
       
       <div className="bg-white dark:bg-black">
       <button className="" onClick={()=> darkModeHandler()}>
                    {
                        
                        dark && <IoSunny /> // render sunny when dark is true
                    }
                    {
                        !dark && <IoMoon /> // render moon when dark is false
                    }
        </button>


      
        </div>
       
       </>
 
  )
}

export default Dark;