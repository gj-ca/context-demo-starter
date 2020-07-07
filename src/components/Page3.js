import React from 'react'
import NestedComponent from './NestedComponent'

const Page3 = ({darkMode, setDarkMode}) => {
    return (
        <div style={{color: darkMode? "white" : "black"}}>
            <h1>Page3</h1>
            <NestedComponent darkMode={darkMode} setDarkMode={setDarkMode} />           
            <p>lorem ipsum</p>
        </div>
    )
}

export default Page3