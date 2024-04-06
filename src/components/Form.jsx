import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { ActionsLogin } from "../store/authSlice";
export default function Form() {
  const dispatch = useDispatch();
  // const [obj ,setObj] = useState;
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(ActionsLogin.login())
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adini yaz"
        // onChange={(a) => e.target.value}
      />
      <input
        type="email"
        placeholder="Emailini yax"
        // onChange={(a) => e.target.value}
      />
      <button type="submit">Gonder</button>
    </form>
  );
}
