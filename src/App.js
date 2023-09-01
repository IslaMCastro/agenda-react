import React from "react";
import Navbar from "./components/navbar/Navbar";
import Tipo from "./components/tipo/Tipo";


function App() {
  return (
    <div className="App">
      <h1>Networks</h1>
      <header>{/* menus */}
      <Navbar/>
      </header>
      <main>{/* Conteudo principal */}
      <Tipo/>
      </main>
      <footer>{/* roddape */}</footer>
    </div>
  );
}
  
export default App;
