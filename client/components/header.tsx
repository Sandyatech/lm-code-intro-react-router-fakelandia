import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MisDemeanours from '../components/misdemeanours';
import Home from '../components/home';
import Confess from '../components/confesstous';

const Header = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/misdemeanours" element={<MisDemeanours />} />
            <Route path="/confess" element={<Confess />} />

        </Routes>
        
        );
}
export default Header;