import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../../React_Tutorial/src/components/Header/Header';
import Hero from './components/hero/Hero';

function App() {
  // const [count, setCount] = useState(0) 51:39

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
