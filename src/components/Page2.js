import React from 'react'

const Page2 = ({darkMode, setDarkMode}) => {
    const data = [1,2,3,4]
    return (
        <div style={{color: darkMode? "white" : "black"}}>
            <h1>Page2</h1>
            {data.map(e => (
                <p>{e}</p>
            ))}
        </div>
    )
}

export default Page2