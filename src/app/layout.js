import { Roboto, Concert_One } from 'next/font/google'

import '../styles/globals.css'
import '../styles/normalize.css'
import Test from '@/components/Test'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const concertOne = Concert_One({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <body className={roboto.className}> */}
      <body suppressHydrationWarning={true}>
        {children}
        {/* <Test font={concertOne} /> */}
      </body>
    </html>
  )
}
