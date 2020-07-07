import React, { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const NestedComponent = () => {
    const {darkMode, setDarkMode} = useContext(DarkMode)
    return <button onClick={() => setDarkMode(!darkMode)}>darkMode</button>
}

export default NestedComponent