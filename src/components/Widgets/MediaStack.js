import React from 'react';
import Badge from "./Badge";
import './MediaStack.scss';

export default function MediaStack({...props}) {
    const {cover, size, count} = props;
    return (
        <div className='media-stack'>
            <div className='media' style={{
                background: `url('${cover}') no-repeat`,
                width: `${size / 100}rem`,
                height: `${size / 100}rem`
            }}/>
            <Badge text={count} backgroundColor='#2F54EB'/>
        </div>
    )
}