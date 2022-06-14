import React from 'react';
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import './networkSupprtStyle.css'

function NetworkSupport({style}) {
    return (
        <div style={style} className='networkSupportsContainer'>
            <div className="networkSupportTop">
                <div className="networkSupportTopRight">
                        <PeopleSharpIcon/>
                    <p>گروه پشتیبانی شبکه</p>
                </div>
                <div className="networkSupportTopLeft">
                    <ReportProblemOutlinedIcon/>
                    <p>12325</p>
                </div>
            </div>
            <div className="networkSupportMain">
                <p>درخواست عوارض حافظ سرور</p>
                <p>تاریخ 1401/3/12 35:10 قط </p>
            </div>
            <div className="networkSupportBottom">
                <p>
                    تاریخ 1401/3/12 35:10 قط
                </p>
                <p>
                    تاریخ 1401/3/12 35:10 قط
                </p>
                <p>
                    تاریخ 1401/3/12 35:10 قط
                </p>
            </div>
        </div>
    );
}

export default NetworkSupport;