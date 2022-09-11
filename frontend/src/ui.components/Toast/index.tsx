import React, { useEffect, useState } from 'react';
import './style.css';
import closeIcon from "../../static/images/close.svg";
import { toast } from './model';

const Toast = ({index, message, type, time , position, close}: toast) => {

    let [toastPopup,setTostPopup] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            // close(index)
            setTostPopup(false)
        }, time);
        return () => clearTimeout(timer);
    }, []);

    return  toastPopup ? (
        <div className="toster-notification" onClick={()=>close(index)}>
            <div className={`toster glass-background ${type} ${position}`}>
                <div className="toster-message">
                    <p>{message}</p>
                </div>
                <div className="toster-action">
                    <button className="toster-close" type="button" aria-label="Dismiss" title="Dismiss">
                        <img src={closeIcon} alt="X"/>
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Toast;
