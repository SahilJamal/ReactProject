import { useDispatch, useSelector } from "react-redux";
import { actions } from "./Store/index-tool-kit";
const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const incHandler = () => {
    dispatch(actions.IncHandler());
  };
  const decHandler = () => {
    dispatch(actions.decHandler());
  };
  const mulHandler = () => {
    dispatch(actions.mulHandler(10));
  };
  return (
    <>
      <button onClick={incHandler}> ADD </button>
      <h1> Counter : {count} </h1>
      <button onClick={decHandler}> SUB </button>
      <button onClick={mulHandler}> MULTIPLY BY 10 </button>
    </>
  );
};

export default ReduxCounter;
