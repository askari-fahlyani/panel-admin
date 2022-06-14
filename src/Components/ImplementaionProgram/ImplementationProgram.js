import React from 'react';
import './implementationProgramStyle.css'
import HeaderPage from "../ChangeControlDashboard/NetworkSupport/HeaderPage";
import AutorenewSharpIcon from "@mui/icons-material/AutorenewSharp";
import MinimizeIcon from "@mui/icons-material/Minimize";
import {Button} from "@mui/material";
import DenseTable from "./ImplementationProgramTable";

function ImplementationProgram(props) {

    return (
        <div className='implementationProgramContainer'>
            <HeaderPage children='برنامه پیاده سازی' icon1={<MinimizeIcon fontSize='small'/>}
                        icon2={<AutorenewSharpIcon fontSize='small'/>}/>
            <div className="periods">
                <Button sx={{marginLeft: '10px', backgroundColor: 'green'}} variant="contained">روزانه</Button>

                <Button sx={{marginLeft: '10px', backgroundColor: 'green'}} variant="contained">هفتگی</Button>

                <Button sx={{marginLeft: '10px', backgroundColor: 'green'}} variant="contained">ماهانه</Button>

                <Button sx={{marginLeft: '10px', backgroundColor: 'green'}} variant="contained">سالانه</Button>

            </div>
            <div className="implementationMainSection">

                <div className="implementationTable">
                    <div className="implementationTableTop">

                    </div>
                    <DenseTable/>
                </div>
                <div className="implementationDataRange">
                    <div className="implementationDataRangeTop">
                        <div className="month">
                            <h4 className="monthTitle">
                                فروردین
                            </h4>
                            <div className="weeks">
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                            </div>
                        </div>

                        <div className="month">
                            <h4 className="monthTitle">
                                اردیبهشت
                            </h4>
                            <div className="weeks">
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                            </div>
                        </div>
                        <div className="month">
                            <h4 className="monthTitle">
                                خرداد
                            </h4>
                            <div className="weeks">
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                                <div className="week">
                                    <h6>شنبه 1401/3/14</h6>
                                    <h6>جمعه 1401/3/20</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="implementationDataRangeBottom">

                    </div>
                </div>
            </div>

        </div>

    );
}

export default ImplementationProgram;