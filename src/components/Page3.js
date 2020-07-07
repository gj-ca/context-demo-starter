import React from 'react'
import NestedComponent from './NestedComponent'
import DataContext from '../context/Data'

const Page3 = () => {
    return (
        <div>
            <h1>Add to Data</h1>
            <NestedComponent />  
            <DataContext.Consumer>
                {value => <button onClick={() => value.setData([...value.data, value.data.length + 1])}>+1</button>}
            </DataContext.Consumer>
            <p>lorem ipsum</p>
        </div>
    )
}

export default Page3