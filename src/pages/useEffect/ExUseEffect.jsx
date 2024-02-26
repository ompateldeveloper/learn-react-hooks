import React, { useEffect, useState } from 'react'

export default function ExUseEffect() {
    const [count,setCount] = useState(0);
    const [delta,setDelta] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(prev=>prev+1)
        },delta || 1000)

        //cleanup
        return ()=>{
            clearInterval(interval)
        }
    },[delta])



    return (
        <div>
            i am counting till infinity
            <div>{count}</div>
            <div>
                <button onClick={()=>{setDelta(1000)}}>1sec</button>
                <button onClick={()=>{setDelta(100)}}>1 centi sec</button>
                <button onClick={()=>{setDelta(1)}}>1 micro sec</button>
            </div>
        </div>
    )
}
