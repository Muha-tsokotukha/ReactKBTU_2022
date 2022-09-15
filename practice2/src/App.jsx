import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./components/login";
import { Layout } from "./components/layout";
import { Dashboard } from "./components/dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
