import React, { useState } from 'react'

export default function FunctionCounter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className='bg-blue-200 p-2'>
            <h2>Counter (Functional Component)</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
