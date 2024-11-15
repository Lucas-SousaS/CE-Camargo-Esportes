import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

function Home() {
  const [data, setData] = useState([]);
  const url = "http://localhost/CE-Camargo-Esportes/Back-end/get_tasks.php";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
    
      <Header />
      <div className="flex flex-col w-full left-10 items-center mt-10 mb-10">
        <div className="flex flex-col w-1/2 left-10 items-start ">
          {data.map((item, index) => (
            <div className="flex items-center gap-6 border-b-2 p-8" key={index}>
              <img className="w-[400px] h-60 object-cover" src={item.imagem_url} alt="Luan Melancia" />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-[#06aa48]" >{item.titulo}</h1>
                <p className="font-normal text-md ">{item.conteudo}</p>
                <span className="font normal text-sm">{item.data_publicacao} | {item.categoria}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}

export default Home;
