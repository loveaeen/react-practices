import React from 'react';
import LikeButton from './ui/like-button';

function Header({title}){
  return <h1>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
  const products = [
      {id:1,name:'Ada Lovelace'},
      {id:2,name:'Grace Hopper'},
      {id:3,name:'Margaret Hamilton'}
  ];
  
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {
          products.map((product) => (
              <li key={product.id}>{product.name}</li>
          ))
        }
      </ul>
  
      <LikeButton />
    </div>
  );
}