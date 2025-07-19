
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Story from './pages/Story';



//import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
//import { IconContext } from "react-icons";




function App() {


  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

 


  return (
    <div className="App">

            <>
                   
                   <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
                   <button className='px-5 py-3 bg-green-400 rounded-full fixed top-6 right-5 left-100% z-[999]' onClick={()=> darkModeHandler()}>
                                {
                                    
                                    dark && <IoSunny /> // render sunny when dark is true
                                }
                                {
                                    !dark && <IoMoon /> // render moon when dark is false
                                }
                    </button>
            
                            <BrowserRouter>

                      

                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/product" element={<Product />} />
                                <Route path="/story" element={<Story />} />
                              </Routes>


                              </BrowserRouter>
                  
                    </div>
                   
                   </>
      
    </div>
  );
}

export default App;
