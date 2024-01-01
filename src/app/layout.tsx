import './globals.css'
import { Poppins } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

const poppin = Poppins({ 
  weight: ['100', '400'],
  subsets:['latin'], 
})

export const metadata = {
  title: 'logisticManager',
  description: 'Developped by Walid Nagga',
  authors:[{name:"Mohamed Walid Nagga", url:"http://"}],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  )
}
