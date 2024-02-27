import React, { useState, useMemo, useCallback } from 'react';

const ExUseMemo = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        console.log('Calculating...');
        return count ** 100;
    }, [count]);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
            <div>expensive calculation: {expensiveCalculation}</div>
        </div>
    );
};

export default ExUseMemo;
