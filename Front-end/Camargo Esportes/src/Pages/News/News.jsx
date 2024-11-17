import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

function News() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [materiaF, setMateriaF] = useState([]);

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
          const imagesNew = JSON.parse(data.imagens);
          setImages(imagesNew);

          const string = data.materia_completa;
          const paragraphs = string.split(/(?<=\w[.!?])\s+/);
          setMateriaF(paragraphs);

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
            <div className="flex flex-col gap-4 border-b-2 pb-3 border-[#5555552d] mb-14">
              <h1 className="font-bold text-5xl">{noticia.titulo}</h1>
              <p className="font-normal text-[#555555]">{noticia.conteudo}</p>
              <p className="font-bold text-[#555555]">
                Por {noticia.autor} <span>-</span>{" "}
                <span className="font-normal text-xs text-[#555555]">
                  {noticia.data_publicacao}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-[100%]">
              <img src={`${images.imagem_principal}`} alt="vila belmiro" />
            </div>

            <div className="flex flex-col gap-2 mt-5">
              {materiaF.map((item, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <h1 className="font-light text-xl text-[#333333]">{item}</h1>
                  <div className="flex w-[100%] items-center justify-center">
                    {index == 3 && (
                      <img
                        className="max-h-[600px] max-w-[430px]"
                        src={`${images.imagem_adicional_1}`}
                        alt={`Imagem ${index + 1}`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="min-h-screen w-screen flex items-start justify-center py-20">
            <div className="flex flex-col items-center justify-center">
              <h1>Opps...</h1>
              <p>página não encontrada.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default News;
