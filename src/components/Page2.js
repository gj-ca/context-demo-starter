import React, { useContext } from 'react'
import NestedComponent from './NestedComponent'
import DataContext from '../context/Data'

const Page2 = () => {
    const {data} = useContext(DataContext)

    return (
        <div>
            <h1>Show All Data</h1>
            <NestedComponent />
            {data.map(e => (
                <p>{e}</p>
            ))}
        </div>
    )
}

export default Page2