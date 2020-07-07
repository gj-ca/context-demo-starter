import React from 'react'
import NestedComponent from './NestedComponent'
import DataContext from '../context/Data'

const Page2 = () => {
    
    return (
        <div>
            <h1>Show All Data</h1>
            <NestedComponent />
            <DataContext.Consumer>
                {value => value.data.map(e => (
                    <p>{e}</p>
                )) }
            </DataContext.Consumer>
        </div>
    )
}

export default Page2