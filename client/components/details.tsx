import React, { useContext } from 'react'
import { FieldErrorContext } from './confessform'

interface DetailsProps {
    details: string;
    onChangeDetails: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Details: React.FC<DetailsProps> = ({ details, onChangeDetails }) => {
    const { fieldError, setFieldError } = useContext(FieldErrorContext);
    const validate: (value: string) => string[] | undefined = (value) => {
        let errors: string[] = [];
        if ((value.length <= 5) || (value.length >= 100))
            errors.push("Details Should be in between 5 to 100 characeters of length");
        if (errors.length == 0)
            return null;
        else
            return errors;

    }
    return (<>
        
        <div className="row">
            <textarea name="details" value={details} placeholder="Write Confess Details.." onChange={e => {
                const errorMessage = validate(e.target.value);
                setFieldError(errorMessage);
                onChangeDetails(e);
            }
            }>
            </textarea>
        </div>
    </>);

}
export default Details;
