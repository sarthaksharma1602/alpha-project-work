import './globals.css'
import SessionProvider from './SessionProvider';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className="">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}