import React, { useState, useEffect } from "react";
import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";
import DemeanoursList from "./demeanourslist";
import DemeanourDropDown from "./demeanourdropdown"


const MisDemeanours: React.FC = () => {
    const [amount, setAmount] = useState<number>(10);
    const [demeanours, setDemeanours] = useState<Array<Misdemeanour>>([]);
    const [demeanourType, setDemeanourType] = useState<MisdemeanourKind>('rudeness');

    useEffect(() => {
        const getMisDemeanours = async (amount: number) => {
            const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);
            const json = await apiResponse.json();
            setDemeanours(json.misdemeanours);
        }
        getMisDemeanours(amount);
    }, [amount]);

    return (<div>
        <div className="custom-select">
            <DemeanourDropDown demeanourType={demeanourType} setDemeanourType={setDemeanourType} />
        </div>
        <div className="demeanour demeanour__header">

            <p>Citizen ID</p>
            <p>Date</p>
            <p>MisDemeanour</p>
            <p>Punishment Idea</p>


        </div>
        {demeanours.map((demeanour, index) => {
            if (demeanour.misdemeanour == demeanourType) {
                return(<DemeanoursList
                    key={index}
                    citizenId={demeanour.citizenId}
                    misdemeanour={demeanour.misdemeanour}
                    date={demeanour.date}
                />)
            }})}
        
        </div>);
    
    
    };

export default MisDemeanours;