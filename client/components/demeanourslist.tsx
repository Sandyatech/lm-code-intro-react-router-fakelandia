import React from 'react';
import { Misdemeanour } from '../types/misdemeanours.types'
import ImageType from './imagetype';
const Demeanourslist: React.FC<Misdemeanour> = ({ citizenId, misdemeanour, date }) => {
    return (
        <div className="demeanour">

            <p>{citizenId}</p>
            <p>{date}</p>
            <p>{misdemeanour}</p>
            <ImageType misdemeanour={misdemeanour} />

        </div>
    );
}
export default Demeanourslist;