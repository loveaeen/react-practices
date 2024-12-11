import {people} from '@/app/lib/data';
import {getImageUrl} from '@/app/lib/utils';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Descrbing the UI'
}

export default function App(){

    const listItems = people.map(person => 
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <article>
            <h1 className="text-sm font-bold underline">Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    )
}

