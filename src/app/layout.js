import '@style/global.css'
import Navbar from '@components/navbar/navbar.js'

export const metadata = {
  title: 'Farid Naufal Afiq',
  description: 'Made for PMW 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
