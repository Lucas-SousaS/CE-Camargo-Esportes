import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupScreen from "./Pages/SignupScreen/SignupScreen";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Cadastro" element={<SignupScreen />} />
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
