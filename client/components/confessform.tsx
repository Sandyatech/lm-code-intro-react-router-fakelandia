import React from 'react'

const ConfessForm: React.FC = () =>
    <div className="confessform">
        <form >
            <div className="col-25"> <label> Subject: </label> </div>
            <div className="col-75"> <input className="col-75" name="subject" type="text"></input></div>
            <div className="col-25"> <label> Reason for Contact: </label> </div>
            <div className="col-75"> <input className="col-75" name="reason" type="text"></input></div>

            
        </form>
    </div>

export default ConfessForm;