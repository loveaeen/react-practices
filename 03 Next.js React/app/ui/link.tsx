import Link from "next/link"

const links = [
    {label: 'Home', href: '/'},
    {label: 'Render List', href: '/render-list'},
]

export default function NavLinks(){
    return (
        <nav>
            {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-500 hover:text-blue-600 mr-4">{link.label}</Link>
            ))}
        </nav>
    )
}