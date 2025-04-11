
// Problem: Create a button that toggles the visibility of a text (e.g., “Hello World”).


import React, { useState } from 'react';

const ToggleText = () => {
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(prev => !prev);
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {show ? 'Hide' : 'Show'} Message
            </button>
            {show && <p>Hello, World!</p>}
        </div>
    );
};

export default ToggleText;
