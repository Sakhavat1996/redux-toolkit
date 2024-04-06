import { connect, useDispatch, useSelector } from "react-redux";
import { ActionsLogin } from "../store/authSlice";

export default function Header() {
  const isAuth = useSelector(state=>state.auth.isAuth)
  const dispatch = useDispatch()
  const signOut = ()=>{
    dispatch(ActionsLogin.logout());
  }
  return (
    <header>
      <h1>Counter App Header</h1>
      {
        isAuth && <nav>
        <a href="#">Products</a>
        <a href="#">Contact</a>
        <button onClick={signOut}>Logout</button>
      </nav>
      }
    </header>
  );
}
