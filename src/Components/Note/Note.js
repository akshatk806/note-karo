import React from 'react'
import "./Note.css"

const Note = () => {
  return (
    <>
        <div className="note">
            <textarea className="note-text" />
            <p>23:26 PM 28 May</p>
        </div>
    </>
  )
}

export default Note