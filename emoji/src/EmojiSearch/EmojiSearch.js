import React from 'react';

import style from './style.module.css'

export default function EmojiSearch (props) {
    return (
        <form className={style.form}>
            <input onChange={props.onChange} value={props.value} type="text"></input>
        </form>
    )
}