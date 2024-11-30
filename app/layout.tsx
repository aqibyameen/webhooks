import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

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