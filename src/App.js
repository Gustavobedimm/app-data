import { useState, useEffect } from "react";
import img1 from "./assets/IMG.JPG";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    function calcula() {
      let dataNascimento = new Date(2020, 3, 29);
      let dataAtual = new Date();

      let diferenca = dataAtual.getTime() - dataNascimento.getTime();
      let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
      const desconto = idade * 365.25;
      const diffInMs   =   new Date() - new Date(2020, 3, 29);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      var mesesTotal = (dataAtual.getFullYear() - dataNascimento.getFullYear())*12 + (dataAtual.getMonth() - dataNascimento.getMonth());
      const mesesRestantes = mesesTotal - (idade * 12);
      setTexto("Estamos namorando a "+idade+" anos e "+mesesRestantes+ " meses ❤️❤️")
    }
    calcula();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {texto}
        </p>
        <img className="App-logo" src={img1} />
      </header>
    </div>
  );
}

export default App;
