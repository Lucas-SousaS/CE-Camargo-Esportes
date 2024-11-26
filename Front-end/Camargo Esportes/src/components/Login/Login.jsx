import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import SecHeader from "../SecHeader/SecHeader";
import google from "../../assets/icons8-google.svg";
import facebook from "../../assets/icons8-facebook.svg";
import twitter from "../../assets/icons8-twitter.svg";
import Footer from "../Footer/Footer";
import "./Style.css"
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, senha }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setMessage("Login realizado com sucesso!");
        console.log("Usuário logado:", data.user);
        window.location.href = "/";
        setMessage(`Bem-vindo, ${data.user}!`);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      setMessage("Erro ao logar. Tente novamente.");
    }
  };

  const [logged, setLogged] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/check-session.php",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      setLogged(data);
    };

    checkSession();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/logout.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao encerrar a sessão.");
      }

      const data = await response.json();
      
      if (data.success) {
        console.log(data.message);
        window.location.href = "/login";
      } else {
        console.error("Falha ao encerrar a sessão:", data.message);
      }
    } catch (error) {
      console.error("Erro ao tentar realizar logout:", error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (logged) {
    if (logged.loggedIn == false) {
      return (
        <>
          <SecHeader />

          <div className="w-screen min-h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[400px] gap-6 box-form">
              <h1 className="flex items-center justify-center text-4xl font-bold mb-4 text-[#06aa48]">
                Seja Bem-vindo
              </h1>

              <div className="flex flex-col gap-4 items-center w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="email" className="text-[#666666]">
                    Email
                  </label>
                  <input
                    className=" border border-[#666666] p-2 rounded"
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="senha" className="text-[#666666]">
                    Senha
                  </label>
                  <input
                    className=" border border-[#666666] p-2 rounded w-full "
                    type="password"
                    placeholder="Insira sua senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>

                <button
                  className="w-full bg-[#06aa48] text-white p-2 rounded mt-2 hover:brightness-110 transition-all"
                  onClick={handleLogin}
                >
                  Entrar{" "}
                </button>
              </div>

              <div className="w-full flex flex-col items-center gap-6">
                <span className="text-[#666666]">Ou escolha a opção</span>

                <div className="flex w-full justify-center gap-4">
                  <button className="py-2 px-5 border rounded-md border-[#06aa48]">
                    <img src={google} className="h-[32px] w-[32px]" aalt="google login" />
                  </button>
                  <button className="py-2 px-5 border rounded-md border-[#06aa48]">
                    <img src={facebook} className="h-[32px] w-[32px]" alt="facebook login" />
                  </button>
                  <button className="py-2 px-5 border rounded-md border-[#06aa48]">
                    <img src={twitter} className="h-[32px] w-[32px]" alt="twitter login" />
                  </button>
                </div>

                <span className=" font-medium text-[#4e4e4e]">
                  Não tem conta?{" "}
                  <Link to={"/Cadastro"} className="text-[#06aa48] font-bold">
                    Criar conta
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <SecHeader />
          <div className="w-screen min-h-screen flex items-center justify-center">
            <div>
              {message && <p>{message}</p>}
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Login;
