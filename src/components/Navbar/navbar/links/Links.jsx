"use client"

import { useState } from 'react'
import styles from './links.module.css'
import NavLinks from "./navLinks/navLinks"

const Links = () => {

    const session = true
    const IsAdmin = true

    const [open, setOpen] = useState(false)

    const links = [
        {
            title: "Home",
            path: "/",
        },
        
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]


    return (
        <div>
            <div className={styles.links}>
                {links.map((link) => (
                    //<Link href={link.path} key={link.title}>{link.title}</Link>

                    <NavLinks item={link} key={link.title}></NavLinks>
                ))}
                {
                    session ? (
                        <>
                            {IsAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }}></NavLinks>}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLinks item={{ title: "Login", path: "/login" }}></NavLinks>
                    )
                }
            </div>
            <button className = {styles.menuButton} onClick={()=>setOpen((prev) => !(prev))}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {
                        links.map((link)=> (
                            <NavLinks item={link} key={link.title}></NavLinks>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Links
