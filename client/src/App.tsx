import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../components/header';

function App() {
    return (
        <BrowserRouter>
            <div >
                <ul className="container">
                    <li><span className="site">FakeLandia<br />Justice<br /> Department </span></li>
                    <li ><Link to='/' className="menu">Home</Link></li>
                    <li ><Link to='/misdemeanours' className="menu">MisDemeanours</Link></li>
                    <li ><Link to='/confess' className="menu">Confess To US</Link></li>
                </ul>
                <hr />
                <Header />
                <div className="footer"> FakeLandia &#169; Sandya</div>
            </div>
        </BrowserRouter>

    );
}

export default App;