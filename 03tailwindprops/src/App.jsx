import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenet/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    userName: "Anshu",
    age:  18
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Hello bhai</h1>
    <Card userName="Chagan" btnText="profile kholo" someObj = {obj}/>
    <Card userName="magan"/>
    <Card userName="badelal" btnText="profile dekho"/>
    </>
  )
}

export default App
