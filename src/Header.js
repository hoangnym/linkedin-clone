import React from 'react';
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1654023593~hmac=b31d0fe1f6b6c7cb16573dbeca015dce"
                    alt=""
                />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder={"Search"} type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title={"Home"}/>
                <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"}/>
                <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"}/>
                <HeaderOption Icon={ChatIcon} title={"Messaging"}/>
                <HeaderOption Icon={NotificationsIcon} title={"Notifications"}/>
                <HeaderOption avatar={"https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg"} title={'me'} />
            </div>
        </div>
    )
}

export default Header;