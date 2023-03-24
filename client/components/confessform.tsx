import React, { useState, useContext, useEffect } from 'react';
import { DemeanoursContext } from "../src/App";
import { MisdemeanourKind } from '../types/misdemeanours.types'
import Subject from "./subject"
import Details from "./details"
import Reason from "./reason"

interface FieldErrorCombo {
    fieldError: string[];
    setFieldError: (fieldError: string[]) => void;
}

export const FieldErrorContext = React.createContext<FieldErrorCombo | null>(null);
const ConfessForm: React.FC = () => {
    const { demeanours, setDemeanours } = useContext(DemeanoursContext);
    const [subject, setSubject] = useState("");
    const [reason, setReason] = useState("");
    const [details, setDetails] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState<boolean>();
    const [confessEnable, setConfessEnable] = useState<boolean>(false);
    const [justTalked, setjustTalked] = useState<boolean>();
    const [fieldError, setFieldError] = useState<string[]>([]);
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:8080/api/confess/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    subject: subject,
                    reason: reason,
                    details: details,
                }),
            });
            let resJson = await res.json();
            setMessage(resJson.message);
            setSuccess(resJson.success);
            if (res.status === 200) {
                if ((resJson.success == true) && (resJson.justTalked == false))
                    setDemeanours([...demeanours, {
                        citizenId: 1234,
                        misdemeanour: (reason as MisdemeanourKind),
                        date: "12345"
                    }])
                setSubject("");
                setReason("");
                setDetails("");
                setjustTalked(resJson.justTalked);

            }

        } catch (err) {
            console.log(err);
        }
    };
    {/*  useEffect(() => {
        const setTheError = () => {
            if ((subject.length == 0) || (reason.length == 0)
                || (details.length == 0) || (fieldError.length!=0))
                setConfessEnable(false)
            else
                setConfessEnable(true)
        }
        setTheError();
    } , [fieldError]) */}
    console.log(fieldError?.length);
    return (
        <FieldErrorContext.Provider value={{ fieldError, setFieldError }}>
            <div className="confessform">
                <form onSubmit={onSubmitHandler}>
                    <Subject subject={subject} onChangeSubject={e => setSubject(e.target.value)} />
                    <Reason reason={reason} onChangeReason={e => setReason(e.target.value)} />
                    <Details details={details} onChangeDetails={e => setDetails(e.target.value)} />

                    < div >
                        <input type="submit" value="Confess" className={(subject == "" || reason == "" || details == "") ? "submit" : "submit submit-ls"}
                            disabled={(subject == "" || reason == "" || details == "") ? true : false} />
                    </div>
                    <p>{(success == false) && message}</p>
                    {fieldError?.map((error, index) => <p key={index}>{error}</p>)}

                </form>
            </div>
        </FieldErrorContext.Provider>);
}

export default ConfessForm;