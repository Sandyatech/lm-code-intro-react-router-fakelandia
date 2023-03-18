import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Misdemeanours from '../components/misdemeanours';
import Home from '../components/home';
import Confess from '../components/confesstous';

function App() {
    return (
        <div className="App">
            <h1>FAKEISLAND JUSTICE DEPARTMENT</h1>
            <BrowserRouter>
                <Routes>
                    <ul>
                        <Route path="/" element={<Home />} />
                        <Route path="/missdemeanours" element={<Misdemeanours />} />
                        <Route path="/confess" element={<Confess />} />
                    </ul>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;