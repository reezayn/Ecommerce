import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { CustomProvider } from '@/contexts/IsLoggedIn'
import Navbar from '@/components/Navbar'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BookBounty',
  description: 'Buy and sell books online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Description  */}
        <meta
          name="description"
          content="Discover BookBounty, your go-to online marketplace for buying and selling new and like-new books. Find great deals or list your books for sale in a community of book lovers!"
        />
        {/* Meta Keyword  */}
        <meta
          name="keywords"
          content="BookBounty, buy books, sell books, used books, new books, online bookstore, book marketplace"
        />
        {/* Open graphs tag  */}
        <meta
          property="og:title"
          content="BookBounty | Buy and Sell Books Online"
        />
        <meta
          property="og:description"
          content="Join BookBounty to trade new and like-new books with a vibrant community of readers. Buy or sell your books today!"
        />
        <meta property="og:image" content="URL_to_an_image_showcasing_books" />
        <meta property="og:url" content="https://www.bookbounty.com" />
        <meta property="og:type" content="website" />
      </head>
      <body className={poppins.className}>
        <CustomProvider>
          <Navbar />
          <div>{children}</div>
        </CustomProvider>
      </body>
    </html>
  )
}
