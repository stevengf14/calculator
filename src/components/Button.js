import React from 'react';

const Button = (props) => {
    return (
        <div className="button"
            onClick={props.onClick}
            data-value={props.value}>
            {props.label}
        </div>
    );
}
export default Button;