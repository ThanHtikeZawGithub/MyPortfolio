import './globals.css'
import {Poppins} from 'next/font/google';
import Navbar from '../components/navbar/Navbar';
import Script from 'next/script';
import localfont from 'next/font/local';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import Loading from './loading';

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
  manifest: 'manifest.json',
  title: 'Than Htike Zaw',
  description: 'A developer who has a great passion about web development',
  icons: {
    icon: {
      url:'/images/pwa384x384.png',
      href:'/images/pwa384x384.png'
    }
  }
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={`${poppin.variable} ${headingFont.variable} antialiased`}>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <Loading />
        <Cursor />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
