
"use client"
import { useState } from 'react'
import styles from './links.module.css'
import NavLinks from "./navLinks/navLinks"
import { handleLogout } from '@/lib/actions'

const Links = async ({session}) => {

    const [open, setOpen] = useState(false);

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
                    session?.user ? (
                        <>
                            {session.user?.isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }}></NavLinks>}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLinks item={{ title: "Login", path: "/login" }}></NavLinks>
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !(prev))}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {
                        links.map((link) => (
                            <NavLinks item={link} key={link.title}></NavLinks>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Links
