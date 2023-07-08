import { useState } from 'react'
import Home from './Home';
import Modal from './Modal';
import SideBar from './SideBar'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
    <Home />
    <Modal />
    <SideBar />
   </>
  )
}

export default App
