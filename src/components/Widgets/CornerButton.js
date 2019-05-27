import React from 'react';
import ctx from 'classnames';
import './CornerButton.scss';

/**
 * 三角Button
 * @param props
 * onClick 点击事件
 * className 类名
 * onClick 点击事件
 * text 文字
 * textClass 文字样式
 * size 按钮大小 默认45px
 * backgroundColor 背景颜色 默认黑
 */
export default function CornerButton ({...props}) {
    const {onClick, className, text, textClass, size, backgroundColor} = props;

    return (
        <div
            className={ctx('corner-btn',className)}
            onClick={onClick}
        >
            <div className='background' style={{borderWidth: `${size}px`, borderColor: backgroundColor}}/>
            <span className={ctx('text h6',textClass)}>{text}</span>
        </div>
    )
}