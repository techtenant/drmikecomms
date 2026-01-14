import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Dr Mike Comins | Expert Aesthetic Medicine London',
  description: 'Pioneer in aesthetic medicine with over 23 years experience. Specialist in anti-wrinkle injections, dermal fillers, and Vaser liposuction.',
   icons: {
    icon: '/logos/favicon.svg',
    apple: '/logos/favicon.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}