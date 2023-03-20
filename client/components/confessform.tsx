import React, { useState } from 'react'
import { JUST_TALK, MISDEMEANOURS } from "../types/misdemeanours.types";

const ConfessForm: React.FC = () => {
    const [subject, setSubject] = useState("");
    const [reason, setReason] = useState("");
    const [details, setDetails] = useState("");
    const [message, setMessage] = useState("");
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(subject);
        console.log(reason);
        console.log(details);
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
            if (res.status === 200) {
                setSubject("");
                setReason("");
                setDetails("");
                setMessage("User created successfully");
                console.log(resJson);
            } else {
                setMessage("Some error occured");
                console.log(resJson);
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
            </form>
        </div>);
}

export default ConfessForm;