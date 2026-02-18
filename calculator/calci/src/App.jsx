import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";

function App() {
 

  return (
    <>
      <div className={styles.calculator}>
        <Display/>
       <ButtonContainer/>
      </div>
    </>
  );
}

export default App;
