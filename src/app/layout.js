import './globals.css'
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../../public/font/poppins/Poppins-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/poppins/Poppins-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/poppins/Poppins-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/poppins/Poppins-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/poppins/Poppins-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/font/poppins/Poppins-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Snalad',
  description: 'Projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-14`}>{children}</body>
    </html>
  )
}
