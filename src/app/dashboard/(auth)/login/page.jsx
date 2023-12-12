"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useState } from "react";
import Link from "next/link";

const Login = () => {

    const session = useSession();
    console.log(">>>check session: ", session)

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password,
        });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Login</button>
                {error && error}
            </form>
            <span className={styles.or}>- OR -</span>
            <button
                onClick={() => {
                    signIn("google");
                }}
                className={styles.button + " " + styles.google}
            >
                Login with Google
            </button>
            <button
                onClick={() => {
                    signIn("github");
                }}
                className={styles.button + " " + styles.github}
            >
                Login with Github
            </button>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/register">
                Create new account
            </Link>
        </div>
    );
}

export default Login;