import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import FlipBoard from './components/Widgets/FlipBoard';
import HomePage from "./components/Pages/HomePage";

function App() {
    return (
        <div className="App">
            <FlipBoard
                name='Home'
                component={<HomePage/>}
            />
            {/*<FlipBoard*/}
                {/*name='Portfolio'*/}
            {/*/>*/}
        </div>
    );
}

export default App;
