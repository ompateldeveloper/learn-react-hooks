import React, { useEffect, useRef } from 'react'

export default function ExUseRef() {
    const containerRef = useRef()
    useEffect(()=>{
        containerRef.current.classList.add('bg-red-500')
        return ()=>{
            if(containerRef.current){ 
                // containerRef.current.classList.remove('bg-red-500')  
            }  
        }
        
    },[])
    return (
        <div ref={containerRef} className='h-32  '>
              
        </div>
    )
}
