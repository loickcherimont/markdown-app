import { useState } from 'react';
import './App.css'
import { Editor } from './components/Editor'
import { Reader } from './components/Reader'

function App() {

  // Variables
  const [text, setText] = useState("");

  return (
    <div className='app'>
      <Reader>{text}</Reader>
      <Editor setText={setText}/>
    </div>
  )
}

export default App
