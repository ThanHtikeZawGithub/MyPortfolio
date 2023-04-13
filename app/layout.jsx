import './globals.css'
import {Raleway} from 'next/font/google';
import { Alegreya, Open_Sans } from 'next/font/google';
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


export const metadata = {
  title: 'Than Htike Zaw',
  description: 'A developer who has a great passion about programming',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${alegreya.variable} ${openSans.variable}`}>
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
