import { SignIn } from '@clerk/nextjs'



export default function Page() {
    return (

        <div className='w-full mt-[100px] h-full flex justify-center items-center'>
       <SignIn />
        </div>
      )
    }