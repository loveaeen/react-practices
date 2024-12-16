import React from 'react';
import LikeButton from './ui/like-button';

function Header({ title }: { title: string }) {
    return <h1 className='text-sm font-bold underline'>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
    const title = 'Develop. Preview. Ship.'
    const products = [
        { id: 1, name: 'Ada Lovelace' },
        { id: 2, name: 'Grace Hopper' },
        { id: 3, name: 'Margaret Hamilton' }
    ];

    const listItems = products.map(product => 
        <li className='text-blue-500 hover:text-blue-600 my-3' key={product.id}>{product.name}</li>
    )

    return (
        <>
            <Header title={title} />
            <ul>
                {listItems}
            </ul>

            <LikeButton />
        </>
    );
}