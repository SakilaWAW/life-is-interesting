import React from 'react';
import './Banner.scss';

export default function Banner({...props}) {
    const {background, title} = props;
    return (
        <div className='banner'>
            <img className='img' src={background}/>
            <div className='text-area'>
                <span className='title'>{title}</span>
            </div>
        </div>
    )
}