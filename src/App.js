import { useState, useEffect } from "react";
import img1 from "./assets/IMG.JPG";
import "./App.css";

function App() {
  const [texto4, setTexto4] = useState("");
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState("");
  const [texto3, setTexto3] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");


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
    const newtYear = new Date().getFullYear() + 1;
    const newYearTime = new Date(`March 29 ${newtYear} 00:00:00`);

    const updateCountdown = () => {
      const currentTime = new Date();
      const difference = newYearTime - currentTime;
      const days = Math.floor(difference / 1000 / 60 / 60 / 24);
      const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(difference / 1000 / 60) % 60;
      const seconds = Math.floor(difference / 1000) % 60;
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };
    setInterval(updateCountdown, 1000);
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
 
<h1>Contagem regressiva 4 Anos de namoro: </h1>
<div id="countdown" className="countdown">
	<div className="time">
		<h2 id="days">{days}</h2>
		<small>dias</small>
	</div>
	<div className="time">
		<h2 id="hours">{hours}</h2>
		<small>horas</small>
	</div>
	<div className="time">
		<h2 id="minutes">{minutes}</h2>
		<small>minutos</small>
	</div>
	<div className="time">
		<h2 id="seconds">{seconds}</h2>
		<small>segundos</small>
	</div>
</div>
    </div>
  );
}
export default App;
