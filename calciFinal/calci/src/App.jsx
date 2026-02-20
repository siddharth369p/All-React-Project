import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";

function App() {
  const [calval, setCalval] = useState("");
  const OnButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result);
    } else {
      const newDisplayvalue = calval + buttonText;
      setCalval(newDisplayvalue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calval} />

        <ButtonContainer onButtonClick={OnButtonClick} />
      </div>
    </>
  );
}

export default App;
