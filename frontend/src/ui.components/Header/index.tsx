import React from 'react';
import SearchBox from '../SearchBox';
import Logo from './Logo';
import './style.css';

const Header = ({}) => {

    return (
        <header>
            <div className="header-components header-raper" >
                <div className="header-components branding">

                    <Logo/>
                    <label className="brand-name">Web Store</label>
                </div>
                <div className="full-width container"> <SearchBox/> </div>
                <div className="header-components">
                    <div className="header-components header-raper ">
                        <div className="header-component">N</div>
                        <div className="header-component">P</div>
                        <div className="header-component">C</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
