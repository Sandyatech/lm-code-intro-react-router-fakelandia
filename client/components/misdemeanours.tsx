import React, { useState, useEffect } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import DemeanoursList from "./demeanourslist";
const MisDemeanours: React.FC = () => {
    const [amount, setAmount] = useState<number>(5);
    const [demeanours, SetDemeanours] = useState<Array<Misdemeanour>>([]);
    useEffect(() => {
        const getMisDemeanours = async (amount: number) => {
            const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);
            const json = await apiResponse.json();
            SetDemeanours(json.misdemeanours);
        }
        getMisDemeanours(amount);
    }, [amount]);

    return (<div>
        {demeanours.map((demeanour, index) =>
        (<DemeanoursList
            key={index}
            citizenId={demeanour.citizenId}
            misdemeanour={demeanour.misdemeanour}
            date={demeanour.date}
        />))}
        
        </div>);
    
    
    };

export default MisDemeanours;