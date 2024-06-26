import { Component, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Actions } from "../store/counterSlice";


export default function Counter() {
  // useSelector or useStore
  // useSelectorun en esas musbet ceheti , state deyismediyi halda yeniden update olmur
  // useSelector vasitesi ile STORE ve Component arasinda connect temin olunur
  const counter = useSelector(state=>state.counter.counter);
  const flag = useSelector(state=>state.counter.flag);

  const dispatch = useDispatch();
  const incrementMath = () =>{
    // dispatch({type : 'INCREMENT'}); ---- only Redux using
    dispatch(Actions.increment()); // redux toolkit
  }
  const increase = () =>{
    // dispatch({type: "INCREASE" , payload: {amount: 5}}); ---- only Redux using
    dispatch(Actions.increase(5)); // redux toolkit {type:SOME_UNIQUE_IDENTIFIER , payload: 10}
  }
  const decrementMath = () =>{
    // dispatch({type: 'DECREMENT'}); ---- only Redux using
    dispatch(Actions.decrement()); // redux toolkit
   
  }
  const toggleHandle=()=>{
    // dispatch({type: 'TOGGLE'}); ---- only Redux using
    dispatch(Actions.toggle()); // redux toolkit
  }
  return (
    <div>
        {
          flag && <>
            <h2>Counter <code>&lt;div&gt;</code> </h2>
            <h3>{counter}</h3>
            <button onClick={incrementMath}>Artir </button>
            <button onClick={increase}>Artir +5</button>
            <button onClick={decrementMath}>Azalt </button>
          </>
        }
        <br />
        <button onClick={toggleHandle}>Toggle Calculus</button>
        
    </div>
  );
}

// In case of using Class-based Components
/*
class Counter extends Component {
  incrementMath() {
    console.log(this.props)
    this.props.increment();
  }
  decrementMath() {
    this.props.decrement()
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.props.counter}</h3>
        <button onClick={this.incrementMath.bind(this)}>Artir+</button>
        <button onClick={this.decrementMath.bind(this)}>Azalt-</button>
      </div>
    );
  }
}
const mapStateToProps = state=>{
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    increment: ()=> dispatch({type: 'INCREMENT'}),
    decrement: ()=> dispatch({type: 'DECREMENT'}),
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Counter)
*/