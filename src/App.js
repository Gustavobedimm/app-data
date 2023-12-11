import { useState, useEffect } from "react";
import img1 from "./assets/IMG.JPG";
import "./App.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
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
      const diffInMs = new Date() - new Date(2020, 3, 29);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      var mesesTotal =
        (dataAtual.getFullYear() - dataNascimento.getFullYear()) * 12 +
        (dataAtual.getMonth() - dataNascimento.getMonth());
      const mesesRestantes = mesesTotal - idade * 12;
      setTexto(idade + " anos e " + mesesRestantes + " meses te amando");
      setTexto2(mesesTotal + " Meses sendo feliz por ter você comigo");
      setTexto3( Math.floor(diffInDays) + " Dias com saudade de você");
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
        <img className="App-logo" src={img1}/>
        <div id="heart" class="heart"></div>
        <label className="texto">29/03/2020</label>
        <h2>{texto}</h2>
        <h4>{texto2}</h4>
        <h5>{texto3}</h5>
        <hr></hr>
        <h4>Contagem regressiva 4 Anos de namoro: </h4>
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
        
        
        
      </header>
      
    </div>
  );
}
export default App;
