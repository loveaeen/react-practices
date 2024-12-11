import React from 'react';
import NavLinks from './ui/link';

// These styles apply to every route in the application
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
        <NavLinks />
        <div>{children}</div>
      </body>
    </html>
  )
}