import { useEffect, useState } from "react";
import SecHeader from "../../components/SecHeader/SecHeader";
import { Link } from "react-router-dom";
import { FaCarCrash, FaEdit, FaTrash } from "react-icons/fa";
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
          console.log(data);

          setNoticia(data);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    };

    handleSubmit();
  }, [idUser]);

  const handleDelete = async (idNews) => {
    if (idNews) {
      if (confirm("Tem certeza de que deseja excluir esta notícia?")) {
        try {
          console.log(idNews);
          const response = await fetch(
            "http://localhost/CE-Camargo-Esportes/Back-end/delete_news.php",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idNews,
              }),
            }
          );

          window.location.href = "/mynews";
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    }
  };

  const textStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <>
      <SecHeader Titulo={"Minhas notícias"} />
      <div className="w-screen min-h-screen flex flex-col gap-16 justify-center items-center">
        {isLogged ? (
          <>
            <div className="p-10 flex flex-col gap-10 absolute items-center mt-10">
              {noticia.length > 0 ? (
                noticia.map((item) => (
                  <div
                    key={item.id}
                    class="bg-gray-50 border border-gray-200 shadow-2xl rounded-lg p-6 py-8 flex gap-12 items-center justify-between"
                  >
                    <div className="flex items-center gap-10">
                      <div className="h-28 w-60 flex items-center">
                        <img
                          src="https://imgs.search.brave.com/cWe3Gv7kKUE6-9YbZKTzpt2NthlSQkj7NZaOFqL-ZXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi1n/ZS5nbGJpbWcuY29t/L1dfSFY2Z0M2Ym95/SlQwMmdwVkdXaWQ0/V09vQT0vMHgwOjEy/ODB4NzIwLzU0MHgz/MDQvc21hcnQvZmls/dGVyczptYXhfYWdl/KDM2MDApL2h0dHBz/Oi8vaS5zMy5nbGJp/bWcuY29tL3YxL0FV/VEhfYmM4MjI4YjY2/NzNmNDg4YWEyNTNi/YmNiMDNjODBlYzUv/aW50ZXJuYWxfcGhv/dG9zL2JzLzIwMjMv/MC9WL0R5bkJpWlRB/YUlSWGxBZmFKUUFn/L2UyNDAwM2Y4LTRj/YzAtNDcyMy1hYzQ2/LTA1YWExY2Q2MTQ0/Mi5qZmlm"
                          alt=""
                          className="object-contain rounded"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 class="text-xl font-semibold text-gray-800 truncate w-44">
                          {item.titulo}
                        </h2>
                        <p class="text-gray-600 text-sm">
                          publicado em: {item.data_publicacao}
                        </p>
                        <div className="w-60 truncate">{item.conteudo}</div>
                      </div>
                    </div>
                    <div class="space-x-2 flex items-center">
                      <Link
                        className="flex items-center gap-2 transition-all bg-[#06aa48] hover:bg-[#058a3a]  text-white px-4 py-2 rounded-md text-sm"
                        to={`/editnews/${item.id}`}
                      >
                        <h1 className="font-bold">Editar</h1>
                        <FaEdit />
                      </Link>

                      <button
                        class="flex items-center gap-2 transition-all  bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        <h1 className="font-bold">Deletar</h1>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center mt-[-20px]  bg-gray-100">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg shadow-xl bg-white max-w-lg">
                    <img
                      src="https://via.placeholder.com/300x200?text=No+News"
                      alt="Nenhuma notícia disponível"
                      className="w-full h-auto rounded mb-4"
                    />
                    <p className="text-gray-700 font-medium text-xl mb-2">
                      Não há notícias para mostrar.
                    </p>
                    <Link
                      to="/publicacaoNoticia"
                      className="px-4 py-2 bg-[#06aa48] text-white rounded hover:bg-[#058a3a] hover:shadow-2xl transition-all"
                    >
                      Publique sua Notícia!
                    </Link>
                  </div>
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
