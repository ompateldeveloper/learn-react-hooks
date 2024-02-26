import React, { useReducer, useState } from 'react'

export default function ExUseReducer() {
    function reducer(state,action){
        switch(action.type){
            case "CLEAR":
                break;
            case "GET" :
                return {
                    ...state,
                    text: action.payload
                }
                break;
            default :
                break;
        }
    }

    const initialState = {
        text:''
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [text,setText] = useState()
    return (
        <div>
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button onClick={()=>{dispatch({type:'GET', payload:text})}}>change</button>
            <button onClick={()=>{dispatch({type:'CLEAR'})}}>clear</button>
        </div>
    )
}
