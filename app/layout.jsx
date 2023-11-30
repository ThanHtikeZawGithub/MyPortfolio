import './globals.css'
import {Poppins, Raleway} from 'next/font/google';
import { Alegreya, Open_Sans, Manrope } from 'next/font/google';
import Navbar from './Navbar';
import Script from 'next/script';
import localfont from 'next/font/local';
import Cursor from './_components/Cursor';
import Footer from './_components/Footer';

const headingFont = localfont({
  src: "../public/fonts/font.woff2",
  variable: '--heading',
});


const poppin = Poppins ({
  subsets:['latin'],
  variable:'--font-pop',
  weight: ["400", "500", "600", "700", "800", "900"],
})


export const metadata = {
  title: 'Than Htike Zaw',
  description: 'A developer who has a great passion about programming',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={`${poppin.variable} ${headingFont.variable}`}>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        {/* <Cursor /> */}
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
