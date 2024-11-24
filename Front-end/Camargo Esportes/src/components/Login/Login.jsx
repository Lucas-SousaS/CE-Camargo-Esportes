import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SecHeader from "../SecHeader/SecHeader";

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
        window.location.href = "/login";
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
      return (<>
        <SecHeader />

        <div className="w-screen min-h-screen flex items-center justify-center">
          

          <div className="flex flex-col justify-center">
            <h1 className="flex items-center justify-center">Login</h1>

            <div className="flex flex-col gap-2 items-center">
              <input
                className="border border-black "
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border border-black "
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Entrar </button>
          </div>
        </div>
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
