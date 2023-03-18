import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../components/header';

function App() {
    return (
        <BrowserRouter>
        <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/misdemeanours'>MisDemeanours</Link></li>
                    <li><Link to='/confess'>ConfesstoUS</Link></li>
                </ul>
                <hr />
               <Header />
        </div>
        </BrowserRouter>

    );
}

export default App;