import React from 'react';

import style from './style.module.css'

function EmojiSearch ({ onChange, value }) {
    return (
        <form className={style.form}>
            <input 
                onChange={onChange} 
                type="text"
                value={value}
            />
        </form>
    )
}

export default React.memo(EmojiSearch)
