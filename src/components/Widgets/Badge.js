import React from 'react';
import ctx from 'classnames';
import './Badge.scss';

export default function Badge ({...props}) {
    const {text, textClass, backgroundColor} = props;
    return (
        <div className={ctx('badge h6', textClass)} style={{backgroundColor: backgroundColor}}>
            {text}
        </div>
    )
}