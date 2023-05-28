import React from 'react'
import Note from '../Note/Note.js'
import "./NoteContainer.css"

const NoteContainer = (props) => {
  return (
    <div className="note-container">
        <h2>Note Karo</h2>
        <div className="note-container-notes custom-scroll">
            {
                props.notes.map((note, index) => <Note
                    key={index} 
                    note={{
                        text:note.text,
                        time:note.time,
                        color:note.color
                    }} 
                />)
            }
        </div>
    </div>
  )
}

export default NoteContainer