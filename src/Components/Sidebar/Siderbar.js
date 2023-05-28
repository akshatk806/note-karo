import React from 'react'
import "./Sidebar.css"

const Siderbar = () => {
    const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]

  return (
    <div className="sidebar">
        <img src="images/plus.png" alt="" />
        <ul className="sidebar-list">
            {
                // generating the color dynamically
                colors.map((color, index) => (
                <li 
                    key={index} 
                    className="sidebar-list-item" 
                    style={{backgroundColor:color}}
                />)
            )}
        </ul>
    </div>
  )
}

export default Siderbar