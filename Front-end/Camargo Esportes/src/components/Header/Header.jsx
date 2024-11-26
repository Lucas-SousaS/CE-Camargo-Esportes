import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import SideMenuRight from "../sideMenuRight/sideMenuRight";
// import "./Style.css"

function Header({ categoria, cadastro }) {
  const [link, setLink] = useState("/");

  if (categoria == null || categoria == undefined) {
    categoria = "ce";
  } else {
    setLink("/");
  }

  const [style, setStyle] = useState("left-[-100%]");
  function Esconder() {
    if (style == "left-[-100%]") {
      setStyle("left-0");
    } else {
      setStyle("left-[-100%]");
    }
  }

  const [estilo, setEstilo] = useState("right-[-100%]");
  function aparecer() {
    if (estilo == "right-[-100%]") {
      setEstilo("right-0");
    } else {
      setEstilo("right-[-100%]");
    }
  }
  return (
    <>
      <SideMenu hidden={style} func={Esconder} />
      <header className="bg-[#06aa48] w-screen py-5 relative h-[74px]">
        <div className="flex items-center justify-center gap-4 absolute left-[10%] top-[50%] translate-y-[-50%]">
          <button
            onClick={() => Esconder()}
            className="flex items-center gap-2"
          >
            <div className="flex flex-col  gap-1">
              <div className="w-5 h-[3px] rounded-md bg-white"></div>
              <div className="w-5 h-[3px] rounded-md bg-white"></div>
              <div className="w-5 h-[3px] rounded-md bg-white"></div>
            </div>
            <h3 className="text-lg font-semibold text-white flex items-center mt-[2px]">
              MENU
            </h3>
          </button>
        </div>

        <div className="absolute flex items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ">
          <Link to={link} className="flex items-center justify-center">
            <h1 className="font-bold text-5xl text-white">{categoria}</h1>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 absolute right-[10%] top-[50%] translate-y-[-50%]">
          <div className="flex items-center bg-[#058a3a] gap-2 p-1 px-2 rounded box-search">
            <FaSearch className="text-white icon-search" />
            <input
              type="text"
              className="bg-[#058a3a] font-bold outline-none placeholder:text-white"
              placeholder="Buscar"
            />
          </div>
          <div className="flex gap-1 items-center">
            {!cadastro ? (
              <>
                <Link to={"/login"} className="flex gap-1 items-center">
                  <h1 className="text-white font-semibold">Entre</h1>
                </Link>
                <span className="text-white">|</span>
                <Link to={"/cadastro"} className="flex gap-1 items-center">
                  <h1 className="text-white font-semibold ">Fazer cadastro</h1>
                </Link>
              </>
            ) : (
              <>
                <SideMenuRight hidden={estilo} func={aparecer} />
                <button
                  onClick={() => aparecer()}
                  className="flex items-center gap-2"
                >
                  <FaUser className="text-white text-xl" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
