'use client';
import { getImageUrl } from '@/app/lib/utils';
import { AvatarProps } from '@/app/types/person';

export default function Card({ isActive,onShow } : {isActive: boolean, onShow: () => void }) {
    return (
        <div className="border-2 border-gray-300 rounded-md p-4">
            <button 
                onClick={onShow} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Show
            </button>
            {isActive && (
                <>
                    <Avatar person={{ name: 'Dana Han', imageId: 'YfeOqp2' }}/>
                    <Avatar person={{ name: 'Dana Han', imageId: 'OKS67lh' }} size={80}/>
                    <Avatar person={{ name: 'Dana Han', imageId: '1bX5QH6' }} size={50}/>
                </>
            )}
        </div>
    )
}

function Avatar({ person , size = 100 } : AvatarProps) {
    return (
      <img
        className="rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
}