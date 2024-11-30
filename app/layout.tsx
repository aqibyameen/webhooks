import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Home from './page'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className='bg-black'>
          
       
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
         
          {children}
         
            <UserButton />
           
          </SignedIn>
          
        </body>
      </html>
    </ClerkProvider>
  )
}