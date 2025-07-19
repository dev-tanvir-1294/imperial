import { Link } from "react-router-dom";





function Header() {

    const path = window.location.pathname;

  return (
    <div className="bg-white dark:bg-black py-3 border-t">
        <div className="container my-0 mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-5">

            

            <div>
                <ul className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-5 text-md">

                    <Link to="/" className={path === "/" ? "text-yellow-500 font-[900]" : "text-White"}>Home</Link>

                    <Link to="/about" className={path === "/about" ? "text-yellow-500 font-[900]" : "text-White"}>About</Link>

                    <Link to="/product" className={path === "/product" ? "text-yellow-500 font-[900]" : "text-White"}>Product</Link>

                    <Link to={"/story"} className={path === "/story" ? "text-yellow-500 font-[900]" : "text-White"}>Story</Link>

                

                </ul>
            </div>

            <div className="flex flex-row gap-5 justify-center items-center text-sm">
                <p className="cursor-pointer">LogIn</p>
                <button className="bg-[#F2C94C] text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-white">Sign Up</button>
            </div>


        </div>
    </div>
  )
}

export default Header;