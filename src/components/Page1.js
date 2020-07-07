import React from 'react'
import FormComponent from './FormComponent'
import NestedComponent from './NestedComponent'


const Page1 = ({darkMode, setDarkMode}) => {
    return (
        <div >
            <h1 style={{color: darkMode? "white" : "black"}}>Page1</h1>
            <NestedComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            <FormComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default Page1