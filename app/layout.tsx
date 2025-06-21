import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'RentHouse - Modern Rental Management Platform',
  description: 'Connect property owners with renters through our comprehensive rental management platform. Find your perfect home or manage your properties with ease.',
  keywords: 'rental management, property rental, house rental, apartment rental, property management, real estate',
  authors: [{ name: 'RentHouse Team' }],
  openGraph: {
    title: 'RentHouse - Modern Rental Management Platform',
    description: 'Connect property owners with renters through our comprehensive rental management platform.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
