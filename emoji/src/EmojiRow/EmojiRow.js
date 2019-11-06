import React from 'react';

import style from './style.module.css';

function EmojiRow ({ symbol, title }) {
    const codePointHex = symbol && symbol.codePointAt(0).toString(16);
    return (
        <tr className={style.row}>
            <td>
                <img 
                    alt=""
                    className={style.symbol} 
                    src={`http://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`}
                />
            </td>
            <td>
                {title}
            </td>
        </tr>
    )
}

export default React.memo(EmojiRow)
