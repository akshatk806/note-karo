import React, { useState } from 'react'
import "./Sidebar.css"

const Siderbar = (props) => {
    const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]

    // state variable for toggle the color pallete when we click on Add button
    const [listOpen, setListOpen] = useState(false);   // state tells us whether the color pallete is open or not

  return (
    <div className="sidebar">
        <img src="images/plus.png" className='addIcon' alt="Add" onClick={()=>setListOpen(!listOpen)}/>
        <ul className={ `sidebar-list ${listOpen ? "sidebar-list-active":""}` }>
            {
                // generating the color dynamically
                colors.map((color, index) => (
                <li 
                    key={index} 
                    className="sidebar-list-item" 
                    style={{backgroundColor:color}}
                    onClick={() => props.addNote(color)}
                />)
            )}
        </ul>
    </div>
  )
}

export default Siderbar