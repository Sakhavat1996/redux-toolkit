import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import Header from "./components/Header"
import Products from './components/Products'
import {useDispatch , useSelector} from 'react-redux'

export default function App() {
  const isAuth = useSelector(state=>state.auth.isAuth) 
  return (
    <>
      <Header/>
      {!isAuth ? <Form/> : <Products/>}
      {isAuth && <Counter/>}
    </>
  )
}