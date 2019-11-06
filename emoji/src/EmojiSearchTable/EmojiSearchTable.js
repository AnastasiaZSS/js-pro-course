import React, { useState, useCallback, useMemo } from 'react';

import style from './style.module.css';
import EmojiSearch from '../EmojiSearch';
import EmojiTable from '../EmojiTable';
import emojiList from '../emojiList.json';

export default function EmojiSearchTable() {
    const [value, setValue] = useState('');
    const saveValue = useCallback(event => setValue(event.nativeEvent.target.value), []);

    const filteredEmoji = useMemo(() => { 
        let result = emojiList.filter((item) => item.keywords.includes(value));
        if(result.length > 15) { 
            result = result.slice(0, 15)
        }
        return result;
    }, [value])

    return (
        <div className={style.container}>
            <EmojiSearch 
                onChange={saveValue} 
                value={value}
            />
            <EmojiTable 
                list={filteredEmoji}
            />
        </div>
    )
}


