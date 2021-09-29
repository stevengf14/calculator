import React from 'react';

const Keypad = (props) => {
    return (
        <div className="Keypad">
            {props.children}
        </div>
    );
}
export default Keypad;