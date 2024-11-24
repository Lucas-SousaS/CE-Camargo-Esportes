import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function SecHeader() {
    return ( 
        <header className="bg-[#06aa48] flex items-center justify-around w-screen py-4 relative">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
          <FaArrowLeft className="text-white text-xl font-bold" />
          <span className="text-lg font-semibold text-white">Voltar</span>
        </Link>

        <div className="flex items-center justify-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Link to={"/"} className="flex items-center justify-center">
            <h1 className="font-bold text-2xl text-white">CE</h1>
          </Link>
        </div>
        <div></div>
      </header>
     );
}

export default SecHeader;