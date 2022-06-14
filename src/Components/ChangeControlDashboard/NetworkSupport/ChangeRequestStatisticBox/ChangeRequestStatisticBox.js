import React from 'react';
import './requestStatisticStyle.css'

function ChangeRequestStatisticBox({title,number}) {
    return (
        <div className='changeRequestStatisticBoxContainer'>
            <div className="headerSection">
                {title}
            </div>
            <h1 className="mainSection">
                {number}
            </h1>
        </div>
    );
}

export default ChangeRequestStatisticBox;