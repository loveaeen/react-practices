import { Metadata } from "next";
import { getImageUrl } from "../lib/utils";
import { AvatarProps } from "../types/person";

export const metadata: Metadata = {
    title : 'Avatar'
}

function Card({ children } : {children : React.ReactNode}) {
    return (
        <div className="border-2 border-gray-300 rounded-md p-4">
            {children}
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

export default function AvatarPage() {
    return (
        <Card>
            <Avatar person={{ name: 'Dana Han', imageId: 'YfeOqp2' }}/>
            <Avatar person={{ name: 'Dana Han', imageId: 'OKS67lh' }} size={80}/>
            <Avatar person={{ name: 'Dana Han', imageId: '1bX5QH6' }} size={50}/>
        </Card>
    )
}