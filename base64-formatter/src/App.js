import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Base64Page from "./pages/Base64Page/Base64Page";
import BaseMain from "./pages/Base64Page/BaseMain";

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <header className="App-header"><NavBar /></header>
        <main className="App-main">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/base64" element={<Base64Page />} />
        <Route path="/base64main" element={<BaseMain />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
