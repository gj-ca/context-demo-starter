import React from 'react'

const NestedComponent = ({darkMode, setDarkMode}) => {
    return (
        <button onClick={() => setDarkMode(!darkMode)}>darkMode</button>
    )
}

export default NestedComponent