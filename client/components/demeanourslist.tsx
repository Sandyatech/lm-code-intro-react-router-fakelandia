import React from 'react';
import { Misdemeanour } from '../types/misdemeanours.types'
const Demeanourslist: React.FC<Misdemeanour> = ({ citizenId, misdemeanour,date}) => {
    return (
        <div className="demeanour">
            
            <p>{citizenId}</p>
            <p>{misdemeanour}</p>
            <p>{date}</p>
         
        </div>
        );
}
export default Demeanourslist;