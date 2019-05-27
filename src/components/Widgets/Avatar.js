import React from 'react';
import ctx from 'classnames';
import './Avatar.scss';

export default function Avatar({...props}) {
    const {src, size, className} = props;
    return (
        <div
            className={ctx('avatar',className)}
            style={{
                background: `url('${src}') no-repeat`,
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    )
}