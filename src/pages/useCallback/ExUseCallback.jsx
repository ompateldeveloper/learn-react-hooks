import React, { Profiler, useCallback } from 'react'

export default function ExUseCallback() {

    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log(actualDuration);
    }

    const expensiveFunction = useCallback(() => {
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result;
    },[])
    // const expensiveFunction = () => {
    //     let result = 0;
    //     for (let i = 0; i < 100000000; i++) {
    //         result += i;
    //     }
    //     return result;
    // }

    
    return (
        <Profiler onRender={onRender} id='profiler1'>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((index)=>(
                <InnerComponent key={index} index={index} expensiveFunction={expensiveFunction} />
            ))}
        </Profiler>
    )
}

function InnerComponent({expensiveFunction,index}){
    const result = expensiveFunction() 

    return(
        <div className="">hello :{index}</div>
    )
}