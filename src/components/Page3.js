import React from 'react'

const Page3 = ({darkMode, setDarkMode}) => {
    return (
        <div style={{color: darkMode? "white" : "black"}}>
            <h1>Page3</h1>
            <p>lorem ipsum</p>
        </div>
    )
}

export default Page3