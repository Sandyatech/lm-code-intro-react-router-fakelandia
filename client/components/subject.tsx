import React, { useContext } from 'react'
import { FieldErrorContext } from './confessform'

interface SubjectProps {
    subject: string;
    onChangeSubject: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Subject: React.FC<SubjectProps> = ({ subject, onChangeSubject }) => {
    const { fieldError, setFieldError } = useContext(FieldErrorContext);
    const validate: (value: string) => string[] | undefined = (value) => {
        let errors: string[] = [];
        const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
        const numbers = /[0-9]/;
        if ((value.length <= 3) || (value.length >= 25))
            errors.push("Subject Should be in between 3 to 25 characeters of length");
        if (specialChars.test(value))
            errors.push("No special characters allowed in Subject");
        if (numbers.test(value))
            errors.push("No Numbers are allowed in Subject");
        if (errors.length == 0)
            return null;
        else
            return errors;

    }
    return (<>
        <div className="col-25">
            <label> Subject: </label>
        </div>
        <div className="col-75">
            <input className="col-75"
                value={subject}
                name="subject"
                type="text"
                onChange={e => {
                    const errorMessage = validate(e.target.value);
                    setFieldError(errorMessage);
                    onChangeSubject(e);
                }}
            />
        </div>
    </>);

}
export default Subject;
