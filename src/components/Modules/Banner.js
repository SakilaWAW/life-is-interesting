import React from 'react';
import './Banner.scss';

export default function Banner({...props}) {
    const {background} = props;
    return (
        <img className='banner-img' src={background}/>
    )
}