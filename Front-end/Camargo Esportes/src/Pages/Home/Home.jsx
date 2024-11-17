import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [data, setData] = useState([]);
  const url = "http://localhost/CE-Camargo-Esportes/Back-end/get_tasks.php";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map(item => {
          if (typeof item.imagens === 'string') {
            item.imagens = JSON.parse(item.imagens);
          }
          return item;
        });
        setData(formattedData);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="flex flex-col w-full left-10 items-center mt-10 mb-10 min-h-screen">
        <div className="flex flex-col w-1/2 left-10 items-start ">
          {data.map((item, index) => (
            <Link
              to={`/news/${item.id}`}
              className="w-[100%] flex items-center justify-between gap-6 border-b-2 py-8"
              key={index}
            >
              <div className="">
                {/* Aqui você acessa a imagem principal do objeto imagens */}
                <img
                  className="w-[300px] object-cover rounded-sm"
                  src={item.imagens.imagem_principal}
                  alt={item.titulo} // Use o título como alt para acessibilidade
                />
              </div>

              <div className="w-1/2 flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-[#06aa48]">
                  {item.titulo}
                </h1>
                <p className="font-normal text-md truncate">{item.conteudo}</p>
                <span className="font normal text-sm">
                  {item.data_publicacao} | {item.categoria}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
