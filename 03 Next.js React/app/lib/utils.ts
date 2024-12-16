import { person } from "../types/person";

export function getImageUrl(person : person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    )
}