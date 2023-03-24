import React, { useContext } from 'react'
import { FieldErrorContext } from './confessform'
import { JUST_TALK, MISDEMEANOURS, MisdemeanourKind } from "../types/misdemeanours.types";
interface ReasonProps {
    reason: string;
    onChangeReason: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Reason: React.FC<ReasonProps> = ({ reason, onChangeReason }) => {
    const { fieldError, setFieldError } = useContext(FieldErrorContext);
    const validate: (value: string) => string[] | undefined = (value) => {
        let errors: string[] = [];

        if (!(MISDEMEANOURS.includes(value as MisdemeanourKind) || (value=="just-talk")))
            errors.push("Reason Should be 'rudeness','vegetables','lift', 'united','just-talk'");
        if (errors.length == 0)
            return null;
        else
            return errors;

    }
    return (<>

        <div className="col-25">
            <label> Reason for Contact: </label>
        </div>
        <div className="col-75">
            <select className="col-75" value={reason} name="reason" onChange={e => {
                const errorMessage = validate(e.target.value);
                setFieldError(errorMessage);
                onChangeReason(e);
            }
            }>
                <option value="Select">Select</option>
                {MISDEMEANOURS.map((misdemeanour, index) =>
                    (<option key={index} value={misdemeanour} > {misdemeanour}</option>))}
                <option value={JUST_TALK}>{JUST_TALK}</option>
            </select>
        </div>
        
       
    </>);

}
export default Reason;
