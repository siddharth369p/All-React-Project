import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {

   const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
  
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
   dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
     dispatch(counterActions.add(inputElement.current.value));
     
      inputElement.current.value = "";
  };

  const handleSubstract = () => {
     dispatch(counterActions.substract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div className="d-flex gap-2 justify-content-center py-5">

          <button
            className="btn btn-primary rounded-pill px-3"
            type="button"
            onClick={handleIncrement}
          >
            +1
          </button>

          <button
            className="btn btn-success rounded-pill px-3"
            type="button"
            onClick={handleDecrement}
          >
            -1
          </button>

          <button
            type="button"
            className="btn btn-warning rounded"
            onClick={handlePrivacyToggle}
          >
            Privacy Toggle
          </button>

        </div>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div className="d-flex gap-2 justify-content-center py-5">

          <input
            type="text"
            placeholder="enter your number"
            ref={inputElement}
          />

          <button
            className="btn btn-info"
            type="button"
            onClick={handleAdd}
          >
            Add
          </button>

          <button
            className="btn btn-danger"
            type="button"
            onClick={handleSubstract}
          >
            Subtract
          </button>

        </div>
      </div>
    </>
  );
};

export default Controls;