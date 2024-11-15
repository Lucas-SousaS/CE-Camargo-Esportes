import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupScreen from "./Pages/SignupScreen/SignupScreen";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Cadastro" element={<SignupScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
