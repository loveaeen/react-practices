import React from 'react';

export const metadata = {
  title: 'Describing the UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
