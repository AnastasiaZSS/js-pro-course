import React, { useState } from 'react';

import style from './style.module.css';
import EmojiSearch from '../EmojiSearch';
import EmojiTable from '../EmojiTable';
import emojiList from '../emojiList.json';

export default function EmojiSearchTable(props) {
    const [value, setValue] = useState('');

    const saveValue = (event) => {
        setValue(event.nativeEvent.target.value);
    }

    const filterEmoji = function (arr) {
        let result = arr.filter((item) => item.keywords.includes(value));
        if(result.length > 15) { 
            result = result.slice(0, 15)
        }
        return result;
    }

    return (
        <div className={style.container}>
            <EmojiSearch value={value} onChange={saveValue} />
            <EmojiTable list={filterEmoji(emojiList)}/>
        </div>
    )
}