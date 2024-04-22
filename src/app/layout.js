import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Annabel Edwards',
  description: 'Annabel Edwards Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Simple condition to avoid infinite reload loops
            if (!sessionStorage.getItem('reloaded')) {
              sessionStorage.setItem('reloaded', 'true');
              window.location.reload();
            } else {
              sessionStorage.removeItem('reloaded');
            }
          `,
          }}
        />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col justify-between bg-primary font-medium`}
      >
        <Header />
        <main className="mb-0 flex flex-col items-center">{children}</main>
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  )
}
