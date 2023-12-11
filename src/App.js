import { useState, useEffect } from "react";
import img1 from "./assets/IMG.JPG";
import "./App.css";

function App() {
  const [texto4, setTexto4] = useState("");
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState("");
  const [texto3, setTexto3] = useState("");

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
      setTexto4("29/03/2020")
      setTexto(idade+" anos e "+mesesRestantes+ " meses te amando ❤️❤️")
      setTexto2("ou " + mesesTotal + " Meses")
      setTexto3("ou " + Math.floor(diffInDays) + " Dias")
    }
    calcula();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{texto4}</p>
        <p>{texto}</p>
        <p>{texto2}</p>
        <p>{texto3}</p>
        <img className="App-logo" src={img1} />
      </header>
 
<h1>Contagem regressiva : </h1>
<div id="countdown" class="countdown">
	<div class="time">
		<h2 id="days">00</h2>
		<small>dias</small>
	</div>
	<div class="time">
		<h2 id="hours">00</h2>
		<small>horas</small>
	</div>
	<div class="time">
		<h2 id="minutes">00</h2>
		<small>minutos</small>
	</div>
	<div class="time">
		<h2 id="seconds">00</h2>
		<small>segundos</small>
	</div>
</div>
    </div>
  );
}
export default App;
