import React, { useState } from 'react';
import { MisdemeanourKind, MISDEMEANOURS } from "../types/misdemeanours.types";

interface DemeanourDropDownProps {
    demeanourType: MisdemeanourKind;
    setDemeanourType:(demeanourType:MisdemeanourKind)=>void;
}

const DemeanourDropDown: React.FC<DemeanourDropDownProps> = ({demeanourType,setDemeanourType }) => {

    const settings = (value) => { setDemeanourType(value);};

    return (<select value={demeanourType} onChange={e => settings(e.target.value)}>
        {MISDEMEANOURS.map((misdemeanour) =>
            (<option value={misdemeanour} > {misdemeanour}</option>))}
    </select>);
}
export default DemeanourDropDown;