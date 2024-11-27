import React, { useState } from 'react';

function Color() {
    const [item, setItem] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleColor = () => {
        setToggle(prevToggle => !prevToggle); 
    };

    return (
        <>
            <div>Color</div>
            <input
                type="text"
                placeholder="Enter name"
                onChange={(e) => setItem(e.target.value)}
            />
            <h1 style={{ color: toggle ? 'red' : 'black' }}>{item}</h1>
            <button onClick={handleColor}>Click</button>
        </>
    );
}

export default Color;
