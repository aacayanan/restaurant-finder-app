import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontPage from "./pages/FrontPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <FrontPage />
    </>
  )
}

export default App
