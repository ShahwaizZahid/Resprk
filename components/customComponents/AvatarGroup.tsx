import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const users = [
  { id: 1, src: "/avatars/1.jpg", name: "Alex" },
  { id: 2, src: "/avatars/2.jpg", name: "Sam" },
  { id: 3, src: "/avatars/3.jpg", name: "Jamie" },
  { id: 4, src: "/avatars/4.jpg", name: "Taylor" },
]

export function AvatarGroup() {
  return (
    <div className="flex justify-center items-center">

    <div className="flex items-center mt-6 h-21.75 w-21.75 rounded-full overflow-hidden">
        <Image src="/images/avatar/1.jpg" alt="Avatar Group Background" width={87} height={87} className=""/>
    </div>
    <div className=" flex flex-col">

    <div className="flex items-center mt-6 h-21.75 w-21.75 rounded-full overflow-hidden">
        <Image src="/images/avatar/2.jpg" alt="Avatar Group Background" width={87} height={87} className=""/>
       
    </div>
     <div className="flex items-center mt-6 h-21.75 w-21.75 rounded-full overflow-hidden">
        <Image src="/images/avatar/3.jpg" alt="Avatar Group Background" width={87} height={87} className=""/>
       
    </div>
    </div>
 <div className=" flex flex-col">

    <div className="flex items-center mt-6 h-21.75 w-21.75 rounded-full overflow-hidden">
        <Image src="/images/avatar/4.jpg" alt="Avatar Group Background" width={87} height={87} className=""/>
       
    </div>
     <div className="flex items-center mt-6 h-21.75 w-21.75 rounded-full overflow-hidden">
        <Image src="/images/avatar/5.jpg" alt="Avatar Group Background" width={87} height={87} className=""/>
       
    </div>
    </div>
     <div className="flex items-center mt-6 h-21.75 w-21.75 rounded-full overflow-hidden">
        <Image src="/images/avatar/6.jpg" alt="Avatar Group Background" width={87} height={87} className=""/>
    </div>
    </div>
  )
}
