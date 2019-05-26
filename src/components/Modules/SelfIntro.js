import React from 'react';
import './SelfIntro.scss';
import Avatar from "../Widgets/Avatar";

export default function SelfIntro({...props}) {
    return (
        <div>
            <Avatar size={100} src={require('../../assets/Qinze.png')}/>
        </div>
    )
}