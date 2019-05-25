import React from 'react';
import './FlipBoard.scss';
import CornerButton from "./CornerButton";

export default function FlipPage({...props}) {
    const {name} = props;
    return (
        <div>
            <CornerButton
                className='right-corner'
                text={name}
                backgroundColor='gold'
            />
        </div>
    )
}