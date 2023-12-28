"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            axios.get('/api/users/logout')
            toast.success("Logout successful")
            router.push("/login")
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data)
    }

    return (
        <div className="flex flex-col items-center
        justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h2 className="p-1 rounded bg-emerald-400">
                {data === "nothing" ? (
                    "Nothing"
                ) : (
                    <Link href={`/Profile/${data}`}>
                        <a>{data}</a>
                    </Link>
                )}
            </h2>
            <hr />
            <button
                onClick={logout}
                className="p-2 border bg-orange-400 text-gray-800 font-extrabold border-gray-300 rounded-lg
            my-4">Logout</button>
            <button
                onClick={getUserDetails}
                className="p-2 border bg-red-700 text-gray-800 font-extrabold border-gray-300 rounded-lg
            my-4">Get user details
            </button>
        </div>
    )
}