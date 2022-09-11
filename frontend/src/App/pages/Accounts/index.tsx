import React, { useState } from 'react';
import Card from '../../../ui.components/Card';
import Login from '../Login';
import './style.css';

type pageType = {
    type: string
}

const Accounts = () => {

    let [page, setPage] = useState<pageType>({type: "login"});

    return (
        <div className="account-access-container container full-page ">
                { page.type=="login" ? 
                    <Login/>
                : null//<Signup/>
                }
        </div>
    );
};

export default Accounts;
