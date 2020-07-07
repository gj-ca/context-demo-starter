import React from 'react'
import FormComponent from './FormComponent'

const Page1 = ({darkMode, setDarkMode}) => {
    return (
        <div >
            <h1 style={{color: darkMode? "white" : "black"}}>Page1</h1>
            <FormComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default Page1