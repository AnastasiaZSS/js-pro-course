import React from 'react';

import style from './style.module.css';

import EmojiRow from '../EmojiRow';

function EmojiTable ({ list }) {
    
    return (
        <table className={style.emojiTable}>
            <tbody>
                {list && list.map((item, index) => 
                    <EmojiRow 
                        key={item.title + index} 
                        symbol={item.symbol} 
                        title={item.title}
                    />)
                } 
            </tbody>
        </table>
    )
}

export default React.memo(EmojiTable)
