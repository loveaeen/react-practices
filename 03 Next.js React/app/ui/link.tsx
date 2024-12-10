import Link from "next/link"

const links = [
    {label: 'Home', href: '/'},
    {label: 'Render List', href: '/renderList'},
]

export default function NavLinks(){
    return (
        <nav>
            {links.map((link) => (
                <Link key={link.href} href={link.href} style={{marginRight: '1rem'}}>{link.label}</Link>
            ))}
        </nav>
    )
}