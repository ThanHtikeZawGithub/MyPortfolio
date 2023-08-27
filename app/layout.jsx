import './globals.css'
import {Poppins, Raleway} from 'next/font/google';
import { Alegreya, Open_Sans, Manrope } from 'next/font/google';
import Navbar from './Navbar';
import Script from 'next/script';

const raleway = Raleway({
  subsets:['latin'],
  variable: '--font-raleway',
});
const alegreya = Alegreya({
  subsets:['latin'],
  variable:'--font-alegreya',
});

const openSans = Open_Sans({
  subsets:['latin'],
  variable:'--font-open',
})

const manrope = Manrope ({
  subsets:['latin'],
  variable:'--font-man',
})

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
      <body className={`${raleway.variable} ${alegreya.variable} ${openSans.variable} ${manrope.variable} ${poppin.variable}`}>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
