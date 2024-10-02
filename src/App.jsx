import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/fav' element={<Favourites/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
