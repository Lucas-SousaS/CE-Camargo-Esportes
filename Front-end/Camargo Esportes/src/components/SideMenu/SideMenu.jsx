import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
function SideMenu({ hidden, func }) {
  return (
    <div
      className={`z-10 h-screen  fixed ${hidden} transition-[1s]  lef top-0 bg-slate-100  flex flex-col justify-around items-center px-5 min-w-[20%]`}
    >
      <div className="flex relative justify-between w-[90%]">
        <div></div>
        <div></div>
        <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          CE
        </h1>
        <button onClick={() => func()}>
          <FaArrowLeft />
        </button>
      </div>

      <div>
        <h2>
          <Link to={"/publicacaoNoticia"}>
            <h1 className="font-bold text-2xl">Publicar noticia</h1>
          </Link>
        </h2>
        <h2>
          <Link to={"/mynews"}>
            <h1 className="font-bold text-2xl">Minhas Notícias</h1>
          </Link>
        </h2>
      </div>

      <div></div>
    </div>
  );
}

export default SideMenu;
