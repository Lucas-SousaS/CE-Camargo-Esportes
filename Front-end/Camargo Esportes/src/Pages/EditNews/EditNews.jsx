import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SecHeader from "../../components/SecHeader/SecHeader";
import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";

function EditNews() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [imagens, setImagens] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem1, setImagem1] = useState("");
  const [imagem2, setImagem2] = useState("");
  const [materiaCompleta, setMateriaCompleta] = useState("");
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setImagens(`{"imagem_principal": "${imagem1}", "imagem_adicional_1": "${imagem2}"}`);
  }, [imagem1, imagem2])

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
            setImagem1(imagesNew.imagem_principal)
            setImagem2(imagesNew.imagem_adicional_1)
            setTitulo(data.titulo)
            setConteudo(data.conteudo)
            setCategoria(data.categoria)
            setMateriaCompleta(data.materiaCompleta)
        }
      })
      .catch((err) => {})
      .finally(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/update_news.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo,
            conteudo,
            autor,
            categoria,
            imagens,
            id,
            materiaCompleta,
          }),
        }
      );

      setTitulo("");
      setConteudo("");
      setAutor("");
      setCategoria("");
      setMateriaCompleta("");
      setImagem1("");
      setImagem2("");

      const data = await response.json();
      console.log("Resposta do servidor:", data);

      if (data.status === "success") {
        console.log("Você se cadastrou com sucesso!");
      } else {
        console.log("Erro ao cadastrar a notícia");
      }

    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  const [isLogged, setIsLogged] = useState(false);
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
        console.log(data.user);
        setAutor(data.user.nome);
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);

  return (
    <>
      <SecHeader />

      <div className="w-screen min-h-screen flex flex-col items-center justify-center mt-10 mb-20">
        <form
          onSubmit={handleSubmit}
          className={`gap-3 h-1/2 flex flex-col items-center box-form`}
        >
          <h1 className="font-bold text-3xl text-gray-600">
            Olá, {user.nome}! Atualize sua notícia
          </h1>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Título"}
              type={"text"}
              id={"titulo"}
              placeholder={"Informe o título da notícia"}
              func={setTitulo}
              value={titulo}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Conteúdo"}
              type={"text"}
              id={"conteudo"}
              placeholder={"Informe o conteúdo da notícia"}
              func={setConteudo}
              value={conteudo}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Categoria"}
              type={"text"}
              id={"categoria"}
              placeholder={"Informe a categoria da notícia"}
              func={setCategoria}
              value={categoria}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Imagens 1"}
              type={"text"}
              id={"imagem1"}
              placeholder={"Informe a URL da imagem 1"}
              func={setImagem1}
              value={imagem1}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Imagens 2"}
              type={"text"}
              id={"imagem2"}
              placeholder={"Informe a URL da imagem 2"}
              func={setImagem2}
              value={imagem2}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <label
              for="materiaCompleta"
              className="text-gray-600 font-semibold"
            >
              Matéria Completa:
            </label>
            <textarea
              className="border-2 border-gray-300 rounded focus:border-[#06aa48]"
              id="materiaCompleta"
              rows="4"
              cols="50"
              value={materiaCompleta}
              onChange={(e) => setMateriaCompleta(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#06aa48] p-1 py-2 w-[100%] rounded-md text-white hover:shadow-xl transition-all hover:brightness-110"
          >
            Atualizar Notícia
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default EditNews;
