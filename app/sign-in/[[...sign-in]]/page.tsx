import { SignIn } from '@clerk/nextjs'
import { dark,  } from '@clerk/themes'


export default function Page() {
    return (

        <div className='w-full mt-[100px] h-full flex justify-center items-center'>
       <SignIn appearance={{
    baseTheme:dark,

   }}/>
        </div>
      )
    }