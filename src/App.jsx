import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import Loading from "./components/UI/Loading/Loading";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="app bg-black">
      <div className="shape1">&nbsp;</div>
      {isLoading && <Loading />}
      <Routes>
        <Route index element={<Navigate to="Login" />} />
        <Route path="Login" element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
