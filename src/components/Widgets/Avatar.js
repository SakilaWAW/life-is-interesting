import React from 'react';
import './Avatar.scss';

export default function Avatar({...props}) {
    const {src, size} = props;
    return (
        <div
            className='avatar'
            style={{
                background: `url('${src}') no-repeat`,
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    )
}