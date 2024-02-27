import React, { useEffect, useRef } from 'react'

export default function ExUseRef() {
    const containerRef = useRef()
    const imageRef = useRef()
    useEffect(()=>{
        imageRef.current = new Image();
        imageRef.current.src = 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg'
        containerRef.current.appendChild(imageRef.current);
   

        return ()=>{
            if(containerRef.current && imageRef.current){
                console.log("inside",containerRef.current,imageRef.current);
                containerRef.current.removeChild(imageRef.current);
                imageRef.current = null; 
            }  
        }
        
    },[])
    return (
        <div ref={containerRef} className='w-32  '>
              
        </div>
    )
}
