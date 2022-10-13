import { useRef, useState } from 'react';
import classes from '../scss/MysteryNum.module.scss';
const MysteryNum = () => {
  const [userIsCorrect, setUserIsCorrect] = useState(false);
  const [mysteryNum, setMysteryNum] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [guessValue, setGuessValue] = useState(1);
  const guessRef = useRef();
  const changeHandler = (e) => {
    setGuessValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (guessRef.current.value == mysteryNum) console.log(`tama`);
  };
  return (
    <main className={classes.main}>
      <div className={classes.mystery}>{mysteryNum}</div>
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

      <button onClick={submitHandler}>Check</button>
      <p className={classes.score}>
        <ion-icon name='game-controller-outline' /> Score: <span>{score}</span>
      </p>
      <p className={classes.highscore}>
        <ion-icon name='trophy-outline'></ion-icon> Highscore:{' '}
        <span>{score}</span>
      </p>
    </main>
  );
};
export default MysteryNum;
