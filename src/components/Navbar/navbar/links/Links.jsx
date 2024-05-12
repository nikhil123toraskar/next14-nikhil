"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./navLinks/navLinks";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

const links = [
  {
    title: "Homepage",
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
];



const Links = ({session}) => {
  
    const [open, setOpen] = useState(false);
    const toggle =() =>{
        setOpen(false);
    }
  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks} >
          {links.map((link) => (
          <div onClick={toggle}><NavLinks item={link} key={link.title} /></div>
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <div onClick={toggle}><NavLinks item={{ title: "Admin", path: "/admin" }} /> </div>}
            <form action={handleLogout}>
              <button type="submit" className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
            <div onClick={toggle}><NavLinks item={{ title: "Login", path: "/login" }} /> </div>
        )}
         </div>
        
      )}
    </div>
  );
};

export default Links;