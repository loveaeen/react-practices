import React from 'react';
import LikeButton from './ui/like-button';

function Header({title}){
  return <h1 className='text-sm font-bold underline text-center'>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
  const products = [
      {id:1,name:'Ada Lovelace'},
      {id:2,name:'Grace Hopper'},
      {id:3,name:'Margaret Hamilton'}
  ];
  
  return (
    <>
      <Header title="Develop. Preview. Ship." />
      <ul className='flex flex-col items-center justify-center'>
        {
          products.map((product) => (
              <li className='text-blue-500 hover:text-blue-600 my-2' key={product.id}>{product.name}</li>
          ))
        }
      </ul>
  
      <LikeButton />
    </>
  );
}