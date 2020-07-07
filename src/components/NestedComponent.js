import React from 'react'
import DarkMode from '../context/DarkMode'

const NestedComponent = () => {
    return (
        <DarkMode.Consumer>
            {value => <button onClick={() => value.setDarkMode(!value.darkMode)}>darkMode</button>}
        </DarkMode.Consumer>
    )
}

export default NestedComponent