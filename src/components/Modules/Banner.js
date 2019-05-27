import React from 'react';
import './Banner.scss';

export default function Banner({...props}) {
    const {background, title} = props;
    return (
        <div className='banner'>
            <img className='img' src={background} alt='banner'/>
            <div className='text-area'>
                <span className='title h0'>{title}</span>
            </div>
        </div>
    )
}