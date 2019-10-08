import React from 'react';

import style from './style.module.css';

export default function EmojiRow (props) {
    const codePointHex = props.symbol.codePointAt(0).toString(16);
    return (
        <tr className={style.row}>
            <td><img className={style.symbol} src={`http://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`}></img></td>
            <td>{props.title}</td>
        </tr>
    )
}