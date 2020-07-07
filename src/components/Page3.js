import React, { useContext } from 'react'
import NestedComponent from './NestedComponent'
import DataContext from '../context/Data'

const Page3 = () => {
    const {data, setData} = useContext(DataContext)
    return (
        <div>
            <h1>Add to Data</h1>
            <NestedComponent />  
            <button onClick={() => setData([...data, data.length + 1])}>+1</button>
            <p>lorem ipsum</p>
        </div>
    )
}

export default Page3