import { useEffect, useState } from "react";
import SecHeader from "../../components/SecHeader/SecHeader";

function MyNews() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState()
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
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);
  return <>{isLogged ? (<SecHeader /> ): (<div>
    <h1>Faça Login</h1>
  </div>)}</>;
}

export default MyNews;
