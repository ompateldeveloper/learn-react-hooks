import React, { memo, useDeferredValue, useState } from 'react'

export default function ExUseDefferedValue() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text)
    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} className=' h-8 w-64 bg-green-50 outline-none focus:border-green-300 border-b-2 p-2' type="text" placeholder='Enter something' />
            <SearchArray text={deferredText} />
        </div>
    )
}
const SearchArray = memo(function SearchArray({text}){
    let items = [];
    for (let i = 0; i < 500; i++) {
      items.push(<SearchItem key={i} text={text} />);
    }
    return(
        <div className="">
            {items}
        </div>
    )
})
function SearchItem({text}){
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
    }
    return(
        <div>{text}</div>
    )

}