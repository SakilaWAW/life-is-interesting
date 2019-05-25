import React from 'react';
import ctx from 'classnames';
import './CornerButton.scss';

/**
 * 三角Button
 * @param props
 * onClick 点击事件
 * className
 */
export default function CornerButton ({...props}) {
    const {onClick, className, text, textClass, size} = props;

    return (
        <div
            className={ctx('corner-btn',className)}
            onClick={onClick}
        >
            <div className='background' style={{borderWidth: `${size}px`}}/>
            <span className={ctx('text',textClass)}>{text}</span>
        </div>
    )
}