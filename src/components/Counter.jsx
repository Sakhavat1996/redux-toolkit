import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  // useSelector or useStore
  // useSelectorun en esas musbet ceheti , state deyismediyi halda yeniden update olmur
  // useSelector vasitesi ile STORE ve Component arasinda connect temin olunur
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const incrementMath = () =>{
    dispatch({type : 'INCREMENT'})
  }
  const decrementMath = () =>{
    dispatch({type: 'DECREMENT'})
  }
  return (
    <div>
        <h1>Counter</h1>
        <h3>{counter}</h3>
        <button onClick={incrementMath}>Artir+</button>
        <button onClick={decrementMath}>Azalt-</button>
    </div>
  );
}