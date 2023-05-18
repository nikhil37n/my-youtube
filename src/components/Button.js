import React from 'react';

const Button = ({name}) => {
    return (
        <button className="bg-gray-200 rounded-lg px-5 py-1 m-2 text-sm">{name}</button>
    )
}

export default Button;