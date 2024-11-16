import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

function News() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `http://localhost/CE-Camargo-Esportes/Back-end/get_news.php?id=${id}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setNoticia(data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen w-screen flex items-start justify-center py-20">
        {noticia ? (
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col gap-4 border-b-2 pb-3 border-[#5555552d]">
              <h1 className="font-bold text-3xl">{noticia.titulo}</h1>
              <p className="font-normal text-[#555555]">{noticia.conteudo}</p>
              <p className="font-bold text-[#555555]">Por {noticia.autor} <span>-</span> <span className="font-normal text-xs text-[#555555]">{noticia.data_publicacao}</span></p>
            </div>

            <img src={noticia.imagem_url} />
          </div>
        ) : (
          <p>Notícia não encontrada.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default News;
