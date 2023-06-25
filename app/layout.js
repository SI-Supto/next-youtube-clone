import Navbar from './components/navbar'
import './globals.css'
import { ContextProvider } from './components/context'
import AuthProvider from './components/authProvider'
import BottomBar from './components/bottomBar'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'YouTube',
  description: 'created by Supto',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ContextProvider>
            <>
              <Navbar />
              <BottomBar />
              {children}
              <Toaster />
            </>
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
