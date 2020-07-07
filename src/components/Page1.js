import React from 'react'
import FormComponent from './FormComponent'
import NestedComponent from './NestedComponent'


const Page1 = () => {
    return (
        <div >
            <h1>Page1</h1>
            <NestedComponent />
            <FormComponent />
        </div>
    )
}

export default Page1