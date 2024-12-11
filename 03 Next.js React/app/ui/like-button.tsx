'use client'

import {useState} from 'react';

export default function LikeButton(){
  
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleClick}>Like ({likes})</button>;
}