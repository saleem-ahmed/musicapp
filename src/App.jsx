import { Routes, Route } from "react-router-dom";
import Forget from "./pages/forget";
import Home from "./pages/home";
import Login from "./pages/login";
import Reset from "./pages/reset";
import SignUp from "./pages/signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
