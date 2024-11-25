import { useEffect, useState } from "react";
import SecHeader from "../../components/SecHeader/SecHeader";
import { Link } from "react-router-dom";

function MyNews() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState([]);
  const [idUser, setIdUser] = useState();
  const [noticia, setNoticia] = useState([]);

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/check-session.php",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.loggedIn) {
        setIsLogged(true);
        setUser(data.user);
        setIdUser(data.user.id);
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    const handleSubmit = async () => {
      if (idUser) {
        try {
          const response = await fetch(
            "http://localhost/CE-Camargo-Esportes/Back-end/get_news_user.php",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idUser,
              }),
            }
          );
          const data = await response.json();
          setNoticia(data);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    };

    handleSubmit();
  }, [idUser]);

  return (
    <>
      <SecHeader />
      <div className="w-screen min-h-screen flex flex-col justify-center items-center">
        {isLogged ? (
          <>
            <h1>Olá, {user.nome}!</h1>
            <div className="flex flex-col gap-2">
              {noticia.length > 0 ? (
                noticia.map((item) => (
                  <div key={item.id} className="bg-slate-500">
                    <h2>{item.titulo}</h2>
                    <p>{item.conteudo}</p>

                    <button
                      onClick={() => {
                        console.log(`deletou a noticia ${item.id}`);
                      }}
                    >
                      Deletar
                    </button>
                  </div>
                ))
              ) : (
                <div>
                  <p>Não há notícias para mostrar.</p>
                  <Link to={"/publicacaoNoticia"}>Publique sua Notícia!</Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <div>
            <h1>Faça Login</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default MyNews;
