import React, { useState, useEffect, useContext } from "react";
import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";
import DemeanoursList from "./demeanourslist";
import DemeanourDropDown from "./demeanourdropdown"
import { DemeanoursContext } from "../src/App"


const MisDemeanours: React.FC = () => {

    const [demeanourType, setDemeanourType] = useState<MisdemeanourKind>('rudeness');
    const { demeanours, setDemeanours } = useContext(DemeanoursContext);

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
                return (<DemeanoursList
                    key={index}
                    citizenId={demeanour.citizenId}
                    misdemeanour={demeanour.misdemeanour}
                    date={demeanour.date}
                />)
            }
        })}

    </div>);


};

export default MisDemeanours;