import React from 'react';
import Button from './Button'

const list = ["All", "Live", "Gaming", "Music", "Cricket", "Bollywood Music", "Comedy", "Tourism", "Body-Building", "Travel", "Cooking"]

const ButtonList = () => {
    return (
        <div>
            {list.map((category,i) => (
                <Button key={i} name={category} />
            ))}
        </div>
    )
}

export default ButtonList;