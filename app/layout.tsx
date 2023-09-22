import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'




export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Provider>
        <Nav/>
        {children}
        <Footer/>
        </Provider>
        </body>
    </html>
  )
}
