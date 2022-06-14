import React from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {Person} from "@mui/icons-material";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import AutorenewSharpIcon from '@mui/icons-material/AutorenewSharp';
import CloseIcon from '@mui/icons-material/Close';
import ChangeControl from "./ChangeControl";
import {useState} from "react";
import NetworkSupport from "./NetworkSupport/NetworkSupport";
import HeaderPage from "./NetworkSupport/HeaderPage";
import ChangeRequestStatisticBox from "./NetworkSupport/ChangeRequestStatisticBox/ChangeRequestStatisticBox";
import ImplementationProgram from "../ImplementaionProgram/ImplementationProgram";
import './CCDStyle.css'

import Chart from './Chart/Chart.js'

function ChangeControlDashboard(props) {
    const [changeControlItems, setChangeControlItems] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
    ])
    const [statisticBox, setStatisticBox] = useState([
        {id: 1, title: 'تایید شده', number: 4},
        {id: 2, title: "ایجاد شده", number: 23},
        {id: 3, title: "پیش نویس", number: 1},
        {id: 4, title: 'تایید شده', number: 0},
        {id: 5, title: "ایجاد شده", number: 7},
        {id: 6, title: "پیش نویس", number: 15}
    ])
    return (
        <div className='dashboardContainer'>
            <div className="dashboardHeader">
                <div id='txt'>داشبورد کنترل تغییر</div>
                <div className='changesNumber'>12</div>
            </div>
            <div className="dashboardTemplate">
                <div className="leftSideDashboard">
                    <div className="leftSideDashboardHeader">
                        <HeaderPage children='درخواست تغییر' icon1={<MinimizeIcon/>} icon2={<SettingsIcon/>}/>
                        <div className="bottomIcons">
                            <NotificationsIcon className='bottomIcon'/>
                            <ReportProblemOutlinedIcon className='bottomIcon'/>
                            <Person className='bottomIcon'/>
                            <BoltOutlinedIcon className='bottomIcon'/>
                            <QuestionMarkIcon className='bottomIcon'/>
                            <CalendarMonthOutlinedIcon className='bottomIcon'/>
                            <LockIcon className='bottomIcon'/>
                            <SettingsIcon className='bottomIcon'/>
                            <PeopleSharpIcon className='bottomIcon'/>
                            <AutorenewSharpIcon className='bottomIcon'/>
                        </div>
                    </div>
                    <div className="leftSideDashboardChangeItems">

                        {changeControlItems.map(item => {
                            if (item.id === 1) {
                                return <ChangeControl key={item.id} isActive={true}/>
                            } else {
                                return <ChangeControl key={item.id} isActive={false}/>
                            }

                        })}

                    </div>
                </div>
                <div className="rightSideDashboard">
                    <div className="changesRequests">
                        <div className="changeRequest">
                            <p>درخواست تغییر</p>
                            <div className="changeRequestIcons">
                                <AutorenewSharpIcon/>
                                <SettingsIcon/>
                            </div>
                        </div>
                        <div className="changeRequestInputs">
                            <div className="changeRequestInputRight">
                                <select name="status" id="status">
                                    <option value="">برای مثال</option>
                                    <option value="">برای مثال</option>
                                </select>
                            </div>
                            <div className="changeRequestInputLeft">
                                <select name="title" id="title">
                                    <option value="">برای مثال</option>
                                    <option value="">برای مثال</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="networkSupportGroups" >
                        <NetworkSupport style={{marginBottom: '10px', borderTop: "none", borderRadius: "4px"}}/>
                        <NetworkSupport style={{backgroundColor: 'white', marginBottom: '10px'}}/>
                        <NetworkSupport style={{backgroundColor: 'white', marginBottom: '10px'}}/>
                        <NetworkSupport style={{backgroundColor: 'white', marginBottom: '10px'}}/>


                    </div>

                </div>
            </div>
            <div className="changeRequestStatusContainer">
                <HeaderPage children='وضعیت درخواست های تغییر' icon1={<CloseIcon/>} icon2={<MinimizeIcon/>}
                            icon3={<AutorenewSharpIcon/>}/>
                <div className="changeRequestStatusStatistics">
                    {statisticBox.map(item => (

                        <ChangeRequestStatisticBox {...item}/>

                    ))}
                </div>
            </div>
            <div className="charts_section">
                <div>
                    <HeaderPage children='درخواست های تغییر بر اساس نوع' icon1={<AutorenewSharpIcon/>}
                                icon2={<MinimizeIcon/>} icon3={<CloseIcon/>}/>
                    <Chart endpoint="type"
                           labels={[ 'تست', 'خدمات', 'مدیریت', 'مذیریت شبکه', 'اضطراری']}/>

                </div>
                <div>
                    <HeaderPage children='درخواست های تغییر بر اساس سرویس' icon1={<AutorenewSharpIcon/>}
                                icon2={<MinimizeIcon/>} icon3={<CloseIcon/>}/>
                    <Chart endpoint="service" labels={['دنباله دار', 'اضطراری', 'نرمال', 'دنباله دار']}/>
                </div>
            </div>
            <div className="implementation">
                <ImplementationProgram/>
            </div>


        </div>
    );
}

export default ChangeControlDashboard;