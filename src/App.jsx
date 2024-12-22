import { Routes, Route } from "react-router-dom";
import Forget from "./pages/forget";
import Home from "./pages/home";
import Login from "./pages/login";
import Reset from "./pages/reset";
import SignUp from "./pages/signup";
import Dashboard from "./pages/dashboard";
import MainPage from "./pages/dashboard/mainpage";
import Notification from "./pages/dashboard/Notification";
import Message from "./pages/dashboard/Message";
import BookMark from "./pages/dashboard/Bookmark";
import Buy_Sell from "./pages/dashboard/Buy&sell";
import Groups from "./pages/dashboard/Groups";
import Friends from "./pages/dashboard/Friends";
import Profile from "./pages/dashboard/profile";
import Concert from "./pages/dashboard/concert";
import About from "./pages/dashboard/about";
import Sell from "./pages/dashboard/sell";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="notification" element={<Notification />} />
          <Route path="message" element={<Message />} />
          <Route path="bookmark" element={<BookMark />} />
          <Route path="buy_sell" element={<Buy_Sell />} />
          <Route path="groups" element={<Groups/>} />
          <Route path="friends" element={<Friends/> } />
          <Route path="profile" element={<Profile/> } />
          <Route path="concert" element={<Concert/> } />
          <Route path="about" element={<About/> } />
          <Route path="sell" element={<Sell/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
