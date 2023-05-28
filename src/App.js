import React from 'react'
import NoteContainer from './Components/NoteContainer/NoteContainer.js'
import Siderbar from './Components/Sidebar/Siderbar.js'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Siderbar />
      <NoteContainer />
    </div>
  )
}

export default App