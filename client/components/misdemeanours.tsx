import React, { useState, useEffect } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

const MisDemeanours: React.FC = () => {
    const [amount, setAmount] = useState<number>();
    const [demeanours, SetDemeanours] = useState<Array<Misdemeanour>>();
    useEffect(() => {
        const getMisDemeanours = async (amount: number) => {
            const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);
            const json = await apiResponse.json() as { data: Misdemeanour[] };
            SetDemeanours(json.data);
        }
        getMisDemeanours(1);
    }, [amount]);
    return (
        <> Misdemeanours</>
        );
    
    
    };

export default MisDemeanours;