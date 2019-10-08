import React from 'react';

import style from './style.module.css';

import EmojiRow from '../EmojiRow';

export default function EmojiTable (props) {
    
    return (
        <table className={style.emojiTable}>
            <tbody>
                {props.list.map((item, index) => <EmojiRow key={item.title + index} symbol={item.symbol} title={item.title}/>)} 
            </tbody>
        </table>
    )
}