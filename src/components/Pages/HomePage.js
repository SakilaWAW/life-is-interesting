import React from 'react';
import Banner from "../Modules/Banner";

export default function HomePage ({...props}) {
    return (
        <div>
            <Banner background={require('../../assets/Banner.png')}/>
        </div>
    )
}