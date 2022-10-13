import classes from './App.module.scss';

import { useRef, useState } from 'react';

const App = () => {
  const [userIsCorrect, setUserIsCorrect] = useState(false);
  const [mysteryNum, setMysteryNum] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [guessValue, setGuessValue] = useState(1);
  const [hint, setHint] = useState('');
  const guessRef = useRef();
  const reset = () => {
    setMysteryNum(Math.trunc(Math.random() * 20) + 1);
    setScore(20);
    setUserIsCorrect(false);
    setHint('');
  };

  const userIsWrong = () => {
    setUserIsCorrect(false);
  };

  const changeHandler = (e) => {
    setGuessValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const guess = Number(guessRef.current.value);
    // IF USER IS CORRECT
    if (guess == mysteryNum) {
      setUserIsCorrect(true);
      setHint('KORIQUE 🥇');
    }

    // IF USER IS CORRECT AND SETS A NEW HIGHSCORE
    if (guess == mysteryNum && score > highScore) {
      setUserIsCorrect(true);
      setHighScore(score);
    }

    // IF GUESS IS TOO LOW
    else if (guess < mysteryNum) {
      userIsWrong();
      setScore((prevScore) => prevScore - 1);
      setHint('Too low 👍');
    }
    // IF GUESS IS TOO HIGH
    else if (guess > mysteryNum) {
      userIsWrong();
      setScore((prevScore) => prevScore - 1);
      setHint('Too high 👎');
    }
  };
  return (
    <div className={`${classes.container} ${userIsCorrect ? classes.win : ''}`}>
      <h1>GUESS MY NUMBER</h1>
      <header>
        <p>(Between 1 - 20)</p>
        <button className={classes.reset} onClick={reset}>
          <ion-icon name='refresh-outline'></ion-icon>
        </button>
      </header>
      <main className={classes.main}>
        <div className={classes.mystery}>
          <p>{userIsCorrect ? mysteryNum : '?'}</p>
        </div>
        <form onSubmit={submitHandler}>
          <label htmlFor='guess'>Start Guessing</label>
          <input
            onChange={changeHandler}
            value={guessValue}
            ref={guessRef}
            min={1}
            max={20}
            id='guess'
            type='number'
          />
        </form>
        <div className={classes.check}>
          <p>{hint}</p>
          <button onClick={submitHandler}>Check</button>
        </div>

        <p className={classes.score}>
          <ion-icon name='game-controller-outline' /> Score:{' '}
          <span>{score}</span>
        </p>
        <p className={classes.highscore}>
          <ion-icon name='trophy-outline'></ion-icon> Highscore:{' '}
          <span>{highScore}</span>
        </p>
      </main>
    </div>
  );
};

export default App;
