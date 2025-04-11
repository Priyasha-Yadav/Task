// Problem: Create a counter component with increment, decrement, and reset buttons.

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    };

    const handleDecrement = () => {
        setCount(prev => prev - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <>
            <p>Counter Value: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};

export default Counter;
