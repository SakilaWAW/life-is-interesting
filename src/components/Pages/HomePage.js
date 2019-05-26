import React from 'react';
import Banner from "../Modules/Banner";
import CornerButton from "../Widgets/CornerButton";

export default function HomePage ({...props}) {
    const {history} = props;
    return (
        <div>
            <CornerButton text='Works' onClick={()=>history.push('/page/works')}/>
            <Banner background={require('../../assets/Banner.png')}/>
        </div>
    )
}