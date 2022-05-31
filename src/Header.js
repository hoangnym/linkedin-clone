import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

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
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header;