import React from "react";
import MediaStack from "./MediaStack";
import './PhotoLine.scss'

export default function PhotoLine({...props}) {
    const {mediaList} = props;
    return (
        <div className='photo-line'>
            <TimeAxis placeholder='Time' mediaList={mediaList}/>
        </div>
    )
}

const calTimeScale = (mediaList) => {
    const startTime = Date.now();
    const endTime = Date.now();
    return {
        startTime,
        endTime
    }
};
;

function TimeAxis({...props}) {
    const {placeholder, mediaList} = props;
    const {startTime, endTime} = calTimeScale(mediaList);

    return (
        <div className='time-axis'>
            <span className='placeholder h6'>{placeholder}</span>
            <div className='axis'>
                <div className='axis-line'/>
                <MediaPoints mediaList={mediaList}/>
                <MediaStack
                    cover={require('../../assets/Qinze.png')}
                    size={50}
                    count={16}
                />
            </div>
        </div>
    )
}

/**
 * 轴上的点
 */
function MediaPoints({...props}) {
    return (
        <div className='media-points'>

        </div>
    )
}