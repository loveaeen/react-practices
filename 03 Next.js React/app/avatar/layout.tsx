import React from 'react';

export const metadata = {
    title : 'Avatar'
}

export default function AvatarLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className='flex flex-col gap-4'>
            {children}
        </section>
    )
}