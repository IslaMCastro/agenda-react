import React from "react";
import Navbar from "./navbar/Navbar";



function App() {
  return (
    <div className="App">
      <h1>Linguagem de Progamação</h1>
      <header>{/* menus */}
      <Navbar/>
      </header>
      <main>{/* Conteudo principal */}</main>
      <footer>{/* roddape */}</footer>
    </div>
  );
}
  
export default App;
