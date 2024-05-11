"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const navigationtest = () => {

    const router = new useRouter()
    const pathName = new usePathname()

    const query = useSearchParams()



    const handleClick =()=>{
        router.forward();
    }

    return (
        <button onClick={handleClick}>navigationtest</button>
    )
}
export default navigationtest
