"use client";

import { register } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined);
    const router = new useRouter();
    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router])

    return (
        
            <form className={styles.form} action={formAction}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="email" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <input type="password" placeholder="password again" name="passwordRepeat" />
                    <button>Register</button>
                    <div className={styles.redline}>{state?.error }</div>
                    <Link href="/login">Already have an account? <b>Login</b></Link>
                </form>
        
    )
}
export default RegisterForm
