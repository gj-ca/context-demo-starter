import React from 'react'

const FormComponent = ({darkMode, setDarkMode}) => {
    return (
        <>
            <form style={{color: darkMode ? "white" : "black"}}> 
                <fieldset>
                    <label>Field 1</label>
                    <input />
                </fieldset>
                <fieldset>
                    <label>Field 2</label>
                    <select>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </fieldset>

            </form>
        </>
    )
}

export default FormComponent