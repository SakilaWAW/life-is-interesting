import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./components/Pages/HomePage";
import WorksPage from './components/Pages/WorksPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path={`/page/home`} component={HomePage}/>
                <Route path={`/page/works`} component={WorksPage}/>
            </Router>
        </div>
    );
}

export default App;
