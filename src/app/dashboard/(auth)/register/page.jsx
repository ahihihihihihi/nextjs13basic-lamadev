"use client"

import { useSession } from "next-auth/react";

const Register = () => {

    const session = useSession();
    console.log(">>>check session: ", session)

    return (
        <div>
            Register
        </div>
    )
}

export default Register;