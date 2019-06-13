import React from 'react';
import Banner from "../Modules/Banner";
import CornerButton from "../Widgets/CornerButton";
import SelfIntro from "../Modules/SelfIntro";
import PhotoTimeline from "../Modules/PhotoTimeline";

const mediaList = [
    {cover: require('../../assets/VV.png'), stackCount: 16, time: 1559029606455},
    {cover: require('../../assets/Qinze.png'), stackCount: 23, time: 1552029606455},
    {cover: require('../../assets/Banner.png'), stackCount: 17, time: 1552018606455},
    {cover: require('../../assets/VV.png'), stackCount: 10, time: 1551008606455},
];

export default function HomePage ({...props}) {
    const {history} = props;
    return (
        <div>
            <CornerButton text='Works' onClick={()=>history.push('/page/works')}/>
            <Banner background={require('../../assets/Banner.png')} title='Life is interesting'/>
            <SelfIntro />
            <PhotoTimeline mediaList={mediaList}/>
        </div>
    )
}