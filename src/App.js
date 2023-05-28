import React, { useState } from 'react'
import NoteContainer from './Components/NoteContainer/NoteContainer.js'
import Siderbar from './Components/Sidebar/Siderbar.js'
import './App.css'

const App = () => {
  // content of a note we want content dynamically not hard coded
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    // creating a new note
    // const tempNotes = notes  ; it doesn't matter javascript me array as a reference pass hote h so, tempNotes and notes are the same thing (name badla h value nhi)
    const tempNotes = [...notes] // tempNodes is a new array which has the same value as of notes but both are different
    tempNotes.unshift({
      id:Date.now() + "" + Math.floor(Math.random() * 99),                 // Date.now() return the time from epoch in milliseconds , to make unique key
      text:"",
      time:Date.now(),
      color:color
    });
    // unshift is reverse push, push add a elements at last of array and unshift add an element at beginnig of array

    setNotes(tempNotes);
  }

  return (
    <div className="App">
      <Siderbar addNote = {addNote}/>
      <NoteContainer notes={notes}/>
    </div>
  )
}

export default App