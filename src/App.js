import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navigationbar from "./components/Navigationbar";
import { useState } from "react";
import Home from "./components/Home";
import RegisterLektor from "./components/RegisterLektor";
import ExamplePage from "./components/ExamplePage";
import Leadbord from "./components/Leadbord";

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="App">
      <Navigationbar setPage={setPage} />
      {page === 0 && <Home />}
      {page === 1 && <RegisterLektor />}
      {page === 2 && <ExamplePage />}
      {page === 3 && <Leadbord />}
    </div>
  );
}

export default App;
