import React, { useState } from 'react';
import './style.css';
import Header from '../ui.components/Header';
import Accounts from './pages/Accounts';
import Toast from '../ui.components/Toast';
import { toast } from '../ui.components/Toast/model';



type notification = {
    key: number,
    toast: toast
}

const App = () => {
    const key1 = (new Date()).getMilliseconds();
    let testTost = {
            index: key1,
            message: "This is toast meassage...",
            type:"info",
            time:1000,
            position:"kdjxfnv",
            close:""
    }


    let [notificationList, setNotificationList] = useState<Array<toast>>([testTost])

    const removeFromNotificationList = (index:number) => {
        let array = notificationList
        for (let i = 0; i < array.length; i++) {
            if(array[i].index == index){
                array.splice(i, 1); 
                setNotificationList(array);
                console.log(
                    ".kxfjh gkldxfjhlk;xsfjgh l;skjdfgh;skjdf",notificationList
                )
                break;
            }
        }
        
    }

    return (
        <>
            {/* <><Header/></> */}
            <Accounts />
            {/* {notificationList.map((toast: toast)=> */}
                {/* <Toast  key={testTost.index} index={testTost.index} 
                        message={testTost.message} 
                        type={testTost.type} 
                        time={testTost.time} 
                        position={testTost.position} 
                        close={(index:number)=>removeFromNotificationList(index)}/> */}
            {/* } */}
        </>
    );
};

export default App;
