"use client";

import { login } from "@/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);

/*     const router = new useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router])
 */
    return (
        
            <form className={styles.form} action={formAction}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <button>Login</button>
                    <div className={styles.redline}>{state?.error }</div>
                    <Link href="/login">Do not have an account? <b>Register Here</b></Link>
                </form>
        
    )
}
export default LoginForm
