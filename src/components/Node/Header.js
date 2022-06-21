import React from 'react'

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1 style={{ color: "#50a9f9" }}> Notes</h1>
            <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">Color mode</button>
        </div>
    )
}

export default Header
