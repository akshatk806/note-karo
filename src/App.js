import React from 'react'
import NoteContainer from './Components/NoteContainer/NoteContainer.js'
import Siderbar from './Components/Sidebar/Siderbar.js'
import './App.css'

const App = () => {
  // content of a note we want content dynamically not hard coded
  const notes=[
    {
      text:"Akshat dynamic",
      time:"bekar h",
      color:"cyan"
    },
    {
      text:"Akshat dynamic2",
      time:"bekar h 2",
      color:"pink"
    },
    {
      text:"Akshat dynamic3",
      time:"bekar h 3",
      color:"yellow"
    },
    {
      text:"Akshat dynamic4",
      time:"bekar h 4",
      color:"green"
    }
  ]

  return (
    <div className="App">
      <Siderbar />
      <NoteContainer notes={notes}/>
    </div>
  )
}

export default App