import React, {useState, useContext} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import DarkMode from '../context/DarkMode'
import DataContext from '../context/Data'

const App = () => {
    const [darkMode, setDarkMode] = useState(useContext(DarkMode))
    const [data, setData] = useState(useContext(DataContext))

    return (
        <DarkMode.Provider value={{ darkMode, setDarkMode }}>
            <DataContext.Provider value={{data, setData}}>
                <Router>
                    <div style={{height: "100vh", backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black"}}>
                        <nav>
                            <Link style={{color: darkMode? "white" : "black"}} to="/page1">Page 1</Link>
                            <Link style={{color: darkMode? "white" : "black"}} to="/page2">Page 2</Link>
                            <Link style={{color: darkMode? "white" : "black"}} to="/page3">Page 3</Link>
                        </nav>
                        <Route exact path="/page1" component={Page1} />
                        <Route exact path="/page2" component={Page2} />
                        <Route exact path="/page3" component={Page3} />
                    </div>
                </Router>
            </DataContext.Provider>
        </DarkMode.Provider>
    )
}

export default App