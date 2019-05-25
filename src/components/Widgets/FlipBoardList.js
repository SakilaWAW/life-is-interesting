import React from 'react';
import './FlipBoardList.scss';

export default function FlipBoardList({...props}) {
    const {children} = props;
    return (
        <div className='flip-board-container'>
            {children}
        </div>
    )
}