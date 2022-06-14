import React from 'react';


function ChangeControl({isActive}) {
    console.log(isActive)
    return (
        <div className='changeControlItem'>
            <div className={`changeControlLabel ${isActive? 'active': "" }`}>
                <p>درخواست های تغییر</p>
            </div>
            <div className={`changeControlBox ${isActive? 'active': "" }`}>
               <div className="organContainer">
                   <label htmlFor="organ" className='organLabel'>واحد سازمانی</label>
                   <input id='organ' type="text" className={`organInput ${isActive? 'active': "" }` }/>
               </div>
                <div className="impactedUserContainer">
                    <label htmlFor="impactedUser" className='impactedUserLabel'>کاربر تحت تاثیر</label>
                    <input id='impactedUser' type="text" className={`impactedUserInput ${isActive? 'active': "" }`}/>
                </div>
            </div>
        </div>
    )
}

export default ChangeControl