'use client'

import {useState} from 'react';

function Header({title}){
  return <h1>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
  const products = [
      {id:1,name:'Ada Lovelace'},
      {id:2,name:'Grace Hopper'},
      {id:3,name:'Margaret Hamilton'}
  ];
  
  const [likes, setLikes] = useState(0);
  
  function handleClick() {
    setLikes(likes + 1);
  }
  
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
  
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}