import './globals.css'

export const metadata = {
  title: 'JobHuntly - My Profile',
  description: 'Professional profile page for job seekers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

