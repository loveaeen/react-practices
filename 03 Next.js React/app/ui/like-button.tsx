'use client'

import { useState } from 'react';

export default function LikeButton({ children }: { children: React.ReactNode }) {

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" onClick={handleClick}>
            {children} ({likes})
        </button>
    );
}