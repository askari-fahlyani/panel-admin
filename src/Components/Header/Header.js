import React from 'react';
import Icons from "./Icons";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'

function Header(props) {
    return (
        <div className='headerContainer'>
            <div className="headerLeftSide">
                <div className="headerIcons">
                    <div className="leftIcons">
                        <Icons children={<LockIcon/>}/>
                        <div className='managersIconContainer'>
                            <p className='managerIconsText'>مدیران سیستم</p>
                            <Icons children={<PeopleAltIcon/>}/>
                        </div>
                      <div className='managersIconContainer'>
                          <p className='managerIconsText'>مدیر سیستم</p>
                          <Icons children={<PersonIcon/>}/>
                      </div>
                    </div>
                    <div className="rightIcons">
                        <Icons children={<NotificationsIcon fontSize='small'/>}/>
                        <Icons children={<QuestionMarkIcon fontSize='small'/>}/>
                        <Icons children={<ElectricBoltIcon fontSize='small'/>}/>

                    </div>
                </div>
                <div className="headerSearchbar">
                   <div className="searchbarIcon">
                       <Icons children={<SearchIcon style={{padding: '3px 0 0 3px'}}/>}/>
                   </div>
                    <div className="searchbarInput">
                        <input  placeholder='جستجو' type="text" className="searchInput"/>
                    </div>
                </div>
            </div>
            <div className="headerRightSide">
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <div className="menuIcon">
                    <Icons children={<MenuIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Header;