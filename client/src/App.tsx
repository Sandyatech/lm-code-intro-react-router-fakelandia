import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../components/header';
import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";

interface DemeanourCombo {
    demeanours: Misdemeanour[];
    setDemeanours: (demeanours: Misdemeanour[]) => void;
}

export const DemeanoursContext = React.createContext<DemeanourCombo | null>(null);

function App() {
    const [demeanours, setDemeanours] = useState<Misdemeanour[]>([]);
    const [amount, setAmount] = useState<number>(10);
    useEffect(() => {
        const getMisDemeanours = async (amount: number) => {
            const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);
            const json = await apiResponse.json();
            setDemeanours(json.misdemeanours);

        }
        getMisDemeanours(amount);

    }, [amount]);
    return (
        <DemeanoursContext.Provider value={{ demeanours, setDemeanours }}>
            <BrowserRouter>
                <div>
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
        </DemeanoursContext.Provider>

    );
}

export default App;