import React from "react";
import MediaStack from "./MediaStack";
import './PhotoLine.scss'

export default function PhotoLine({...props}) {
    return (
        <div className='photo-line'>
            <TimeAxis placeholder='Time'/>
        </div>
    )
}

function TimeAxis({...props}) {
    const {placeholder} = props;
    return (
        <div className='time-axis'>
            <span className='placeholder h6'>{placeholder}</span>
            <div className='axis'/>
            <MediaStack
                cover={require('../../assets/Qinze.png')}
                size={50}
                count={16}
            />
        </div>
    )
}