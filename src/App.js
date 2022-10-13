import classes from './App.module.scss';
import MysteryNum from './components/MysteryNum';
const App = () => {
  return (
    <div className={classes.container}>
      <h1>GUESS MY NUMBER</h1>
      <header>
        <p>(Between 1 - 20)</p>
        <button>
          <ion-icon name='refresh-outline'></ion-icon>
        </button>
      </header>

      <MysteryNum />
    </div>
  );
};

export default App;
