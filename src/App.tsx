import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./routes/home";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-1 relative">
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
