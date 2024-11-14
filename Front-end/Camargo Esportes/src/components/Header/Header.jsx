import { FaSearch } from "react-icons/fa"

function Header() {
  return (
    <header className="bg-[#06aa48] flex items-center justify-around w-screen py-4" >
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-[3px] rounded-md bg-white"></div>
          <div className="w-5 h-[3px] rounded-md bg-white"></div>
          <div className="w-5 h-[3px] rounded-md bg-white"></div>
        </div>
        <h3 className="text-lg font-semibold text-white">MENU</h3>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-white">CE</h1>
      </div>
      <div className="flex items-center bg-white gap-2 p-1 px-2 rounded">
        <FaSearch className="text-[#777777]" />
        <input type="text" className="bg-white outline-none placeholder:text-[#777777]" placeholder="Buscar" />
      </div>
    </header>
  );
}

export default Header;
