import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#06aa48] flex items-center justify-evenly w-screen py-4">
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-[3px] rounded-md bg-white"></div>
          <div className="w-5 h-[3px] rounded-md bg-white"></div>
          <div className="w-5 h-[3px] rounded-md bg-white"></div>
        </div>
        <h3 className="text-lg font-semibold text-white">MENU</h3>
      </div>

      <div></div>
      <div>
        <Link to={"/"}>
          <h1 className="font-bold text-2xl text-white">CE</h1>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white gap-2 p-1 px-2 rounded">
          <FaSearch className="text-[#777777]" />
          <input
            type="text"
            className="bg-white outline-none placeholder:text-[#777777]"
            placeholder="Buscar"
          />
        </div>

        <Link to={"/cadastro"} className="flex gap-1 items-center">
          <FaUser className="text-white text-lg cursor-pointer hover:text-gray-200 transition-all " />
          <span className="text-white">|</span>
          <h1 className="text-white">Fazer cadastro</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
