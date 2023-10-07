import './globals.css'
import { Open_Sans  } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '@/components/Footer/footer'
const open_Sans = Open_Sans({ 
  weight: '400',
  subsets: ['latin'] })

export const metadata = {
  title: 'SciMarket',
  description: 'An app for open science project to create teams and share data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>
      
        <Navbar/>
        {children}
        {/* <Footer/> */}
        
        </body>
    </html>
  )  
}  
