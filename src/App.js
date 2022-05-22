import { useState } from "react";
import "./App.css";
import Navbar from "./Shared/Navbar";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <div className="" data-theme={!theme && "cupcake"}>
      <Navbar setTheme={setTheme} theme={theme}></Navbar>
    </div>
  );
}

export default App;
