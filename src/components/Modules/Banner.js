import React from 'react';
import './Banner.scss';

export default function Banner ({...props}) {
    const {background} = props;
    return (
        <div className='banner-container' style={{background: background, width: '100%'}}></div>
    )
}