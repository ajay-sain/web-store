import React from 'react';
import './style.css';

type props = {
    children: React.ReactNode
}

const Card = ({children}: props) => {
    return (
        <div className="card hover">
            {children}
        </div>
    )
}

export default Card;
