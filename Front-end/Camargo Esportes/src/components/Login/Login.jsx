import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        // window.location.href = "../";
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
      const response = await fetch("http://localhost/CE-Camargo-Esportes/Back-end/logout.php", {
        method: "POST",
        credentials: "include", // Inclui cookies na requisição
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Erro ao encerrar a sessão.");
      }
  
      const data = await response.json();
  
      if (data.success) {
        console.log(data.message); // Sessão encerrada
        // Redireciona para a página de login ou limpa o estado do usuário
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
        <div>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={handleLogin}>Logar</button>
        </div>
      );
    } else {
      return (
        <div>
          {message && <p>{message}</p>}
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    }
  }
}

export default Login;
