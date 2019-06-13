import React from "react";
import './PhotoTimeline.scss'
import PhotoLine from "../Widgets/PhotoLine";

export default function PhotoTimeline({...props}) {
    const {mediaList} = props;
    return (
        <div className='module photo-timeline'>
            <div className='title h1'>Memories</div>
            <div className='timeline-area'>
                <PhotoLine mediaList={mediaList}/>
            </div>
        </div>
    )
}