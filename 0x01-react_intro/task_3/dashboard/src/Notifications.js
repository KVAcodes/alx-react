import React from 'react';
import "./Notifications.css";
import utils from './utils.js';

const { getLatestNotification } = utils;

function NotificationButton({ onClick }) {
    const buttonStyle = {
        position: 'absolute',
        top: '10%',
        right: '3%',
        cursor: 'pointer'
    }
    return (
        <button aria-label='close' style={buttonStyle} onClick={onClick}>

        </button>
    )
}

function Notifications() {
    const htmlContent = getLatestNotification();
    const handleNotificationButton = () => {
        console.log("Close button has been clicked");
    }
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: htmlContent }}></li>             
            </ul>
            <NotificationButton onClick={()=> handleNotificationButton()} />
        </div>
    )
}

export default Notifications