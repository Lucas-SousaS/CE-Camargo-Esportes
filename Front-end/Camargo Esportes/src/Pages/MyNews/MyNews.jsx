import { useEffect, useState } from "react";
import SecHeader from "../../components/SecHeader/SecHeader";

function MyNews() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState([]);
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
        console.log(data);
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);
  return (
    <>
      <SecHeader />
      <div className="w-screen min-h-screen flex flex-col justify-center items-center">
        {isLogged ? (
          <>
            <h1>Olá, {user.nome}!</h1>
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
