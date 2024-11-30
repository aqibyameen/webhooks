import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
   <div className="w-full h-full flex  justify-center items-center">
      <UserButton />
     
   </div>
  );
}
