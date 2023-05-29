import React from 'react'
import Note from '../Note/Note.js'
import "./NoteContainer.css"
import DarkMode from '../DarkMode/DarkMode.js'

const NoteContainer = (props) => {
  return (
    <div className="note-container">
        <div className='note-container-header'>
          <h2>NoteKaro</h2>
          <DarkMode />
        </div>
        <div className="note-container-notes custom-scroll">
            {
                props.notes.length > 0 ? 
                props.notes.map((note, index) => <Note
                    key={note.id} 
                    note={note} 
                    deleteNote = {props.deleteNote}
                    updateText = {props.updateText}
                />) : <div>
                        <h3>No Notes Present</h3>
                    </div>
            }
        </div>
    </div>
  )
}

export default NoteContainer