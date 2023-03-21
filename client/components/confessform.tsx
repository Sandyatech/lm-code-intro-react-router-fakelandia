import React, { useState, useContext } from 'react';
import { JUST_TALK, MISDEMEANOURS } from "../types/misdemeanours.types";
import { DemeanoursContext } from "../src/App";
import { MisdemeanourKind } from '../types/misdemeanours.types'



const ConfessForm: React.FC = () => {
    const { demeanours, setDemeanours } = useContext(DemeanoursContext);
    const [subject, setSubject] = useState("");
    const [reason, setReason] = useState("");
    const [details, setDetails] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState<boolean>();
    const [justTalked, setjustTalked] = useState<boolean>();
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
    return (
        <div className="confessform">
            <form onSubmit={onSubmitHandler}>
                <div className="col-25">
                    <label> Subject: </label>
                </div>
                <div className="col-75">
                    <input className="col-75" value={subject} name="subject" type="text" onChange={e => setSubject(e.target.value)} />
                </div>
                <div className="col-25">
                    <label> Reason for Contact: </label>
                </div>
                <div className="col-75">
                    <select className="col-75" value={reason} name="reason" onChange={e => setReason(e.target.value)} >
                        <option value="Select">Select</option>
                        {MISDEMEANOURS.map((misdemeanour, index) =>
                            (<option key={index} value={misdemeanour} > {misdemeanour}</option>))}
                        <option value={JUST_TALK}>{JUST_TALK}</option>
                    </select>
                </div>
                <div className="row">
                    <textarea name="details" value={details} placeholder="Write Confess Details.." onChange={e => setDetails(e.target.value)}>
                    </textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="Confess" />
                </div>
                <p>{(success == false) && message}</p>
            </form>
        </div>);
}

export default ConfessForm;