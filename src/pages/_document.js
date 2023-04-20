import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/Navbar.jsx'
import Header from '@/components/Header.jsx'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <div className='wrapper'>
          <Header />
          <Navbar />
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
