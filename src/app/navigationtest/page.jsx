"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const navigationtest = () => {

    const router = new useRouter()
    const pathName = new usePathname()

    const query = useSearchParams()

    console.log(pathName)

    const handleClick =()=>{
        console.log('the button is clicked');
        router.forward();
    }

    console.log('this is navigation test');
    return (
        <button onClick={handleClick}>navigationtest</button>
    )
}
export default navigationtest
