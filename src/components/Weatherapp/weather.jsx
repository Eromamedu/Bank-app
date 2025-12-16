// App.jsx
import React, { useEffect, useState,} from "react";
import "../../App.css";

const CHOICES = ["paper", "scissors", "rock"];

const RULES = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

export default function WeatherApp() {
  const [step, setStep] = useState(1); // 1–4
  const [player, setPlayer] = useState(null);
  const [house, setHouse] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(12);

  const pick = (choice) => {
    setPlayer(choice);
    setStep(2);

    setTimeout(() => {
      const h = CHOICES[Math.floor(Math.random() * 3)];
      setHouse(h);
      setStep(3);

      setTimeout(() => {
        if (choice === h) setResult("DRAW");
        else if (RULES[choice] === h) {
          setResult("YOU WIN");
          setScore((s) => s + 1);
        } else {
          setResult("YOU LOSE");
          setScore((s) => Math.max(0, s - 1));
        }
        setStep(4);
      }, 700);
    }, 700);
  };

  const reset = () => {
    setPlayer(null);
    setHouse(null);
    setResult("");
    setStep(1);
  };

  return (
    <div className="app">
      <Header score={score} />

      {step === 1 && <StepOne onPick={pick} />}
      {step === 2 && <StepTwo player={player} />}
      {step === 3 && <StepThree player={player} house={house} />}
      {step === 4 && (
        <StepFour
          player={player}
          house={house}
          result={result}
          onReset={reset}
        />
      )}

      <button className="rules-btn">RULES</button>
    </div>
  );
}

function Header({ score }) {
  return (
    <header className="header-intro">
      <h1>
        ROCK<br />PAPER<br />SCISSORS
      </h1>
      <div className="score">
        <span>SCORE</span>
        <strong>{score}</strong>
      </div>
    </header>
  );
}

function Token({ type, empty }) {
  return (
    <div className={`token ${type} ${empty ? "empty" : ""}`}>
      {!empty && <span className={`icon ${type}`} />}
    </div>
  );
}

function StepOne({ onPick }) {
  return (
    <div className="triangle">
      {CHOICES.map((c) => (
        <button key={c} onClick={() => onPick(c)}>
          <Token type={c} />
        </button>
      ))}
    </div>
  );
}

function StepTwo({ player }) {
  return (
    <div className="stage">
      <div>
        <p>YOU PICKED</p>
        <Token type={player} />
      </div>
      <div>
        <p>THE HOUSE PICKED</p>
        <Token empty />
      </div>
    </div>
  );
}

function StepThree({ player, house }) {
  return (
    <div className="stage">
      <div>
        <p>YOU PICKED</p>
        <Token type={player} />
      </div>
      <div>
        <p>THE HOUSE PICKED</p>
        <Token type={house} />
      </div>
    </div>
  );
}

function StepFour({ player, house, result, onReset }) {
  return (
    <div className="final">
      <div>
        <p>YOU PICKED</p>
        <Token type={player} />
      </div>

      <div className="outcome">
        <h2>{result}</h2>
        <button onClick={onReset}>PLAY AGAIN</button>
      </div>

      <div>
        <p>THE HOUSE PICKED</p>
        <Token type={house} />
      </div>
    </div>
  );
}


