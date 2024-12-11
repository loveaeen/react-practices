import Link from "next/link"

const links = [
    {label: 'Home', href: '/'},
    {label: 'Render List', href: '/render-list'},
]

export default function NavLinks(){
    return (
        <>
            {links.map((link) => (
                <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                    {link.label}
                </Link>
            ))}
        </>
    )
}