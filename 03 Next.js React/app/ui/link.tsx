import Link from "next/link"

const links = [
    {label: 'Home', href: '/'},
    {label: 'Render List', href: '/render-list'},
]

export default function NavLinks(){
    return (
        <nav className="flex flex-col space-y-3">
            {links.map((link) => (
                <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-blue-500 hover:text-blue-600"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}