import React from 'react';
import Header from '@/app/ui/header';

// These styles apply to every route in the application
import './globals.css'

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='bg-gray-100'>
                <Header />
                <main className='p-4'>
                    {children}
                </main>
            </body>
        </html>
    )
}
