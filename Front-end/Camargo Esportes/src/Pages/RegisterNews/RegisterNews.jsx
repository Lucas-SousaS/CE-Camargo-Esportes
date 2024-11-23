import { useState } from "react";
import Input from "../../components/Input/Input";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CardStatus from "../../components/CardStatus/CardStatus";

function RegisterNews() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagens, setImagens] = useState("");
  const [materiaCompleta, setMateriaCompleta] = useState("");

  // Definição dos estados para o status de cadastro
  const [statusCadastro, setStatusCadastro] = useState(""); // Sucesso ou erro
  const [statusShow, setStatusShow] = useState(false); // Para exibir o CardStatus

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/post_news.php",
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
            materiaCompleta,
          }),
        }
      );

      // Limpar os campos após o envio
      setTitulo("");
      setConteudo("");
      setAutor("");
      setCategoria("");
      setImagens("");
      setMateriaCompleta("");

      const data = await response.json();
      console.log("Resposta do servidor:", data);

      if (data.status === "success") {
        console.log("Você se cadastrou com sucesso!");
        setStatusCadastro("success");
      } else {
        console.log("Erro ao cadastrar a notícia");
        setStatusCadastro("error");
      }

      setStatusShow(true); 
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <>
      <header className="bg-[#06aa48] flex items-center justify-around w-screen py-4 relative">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
          <FaArrowLeft className="text-white text-xl font-bold" />
          <span className="text-lg font-semibold text-white">Voltar</span>
        </Link>

        <div className="flex items-center justify-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Link to={"/"} className="flex items-center justify-center">
            <h1 className="font-bold text-2xl text-white">CE</h1>
          </Link>
        </div>
        <div></div>
      </header>

      <CardStatus show={statusShow} status={statusCadastro} />

      <div className="w-screen min-h-screen flex flex-col items-center justify-center mt-4 mb-8">
        <form
          onSubmit={handleSubmit}
          className={`gap-3 h-1/2 flex flex-col items-center box-form`}
        >
          <h1 className="font-bold text-3xl text-gray-600">
            Publique sua notícia
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
              label={"Autor"}
              type={"text"}
              id={"autor"}
              placeholder={"Informe o nome do autor"}
              func={setAutor}
              value={autor}
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
              label={"Imagens"}
              type={"text"}
              id={"imagens"}
              placeholder={"Informe a URL da imagem"}
              func={setImagens}
              value={imagens}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">


            <label for="materiaCompleta" className="text-gray-600 font-semibold" >Matéria Completa:</label>
            <textarea className="border-2 border-gray-300 rounded focus:border-[#06aa48]"id="materiaCompleta" rows="4" cols="50" value={materiaCompleta} onChange={(e) => setMateriaCompleta(e.target.value)}></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#06aa48] p-1 py-2 w-[100%] rounded-md text-white hover:shadow-xl transition-all hover:brightness-110"
          >
            Publicar Notícia
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterNews;
