import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import HomePage from "./components/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="app bg-black">
      <div className="shape1">&nbsp;</div>
      <Routes>
        <Route index path="/" element={<Navigate to="Login" />} />
        <Route path="Login" element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
