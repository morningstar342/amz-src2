import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthUser(session) {
    return (
        <main className='container mx-auto text-center py-20'>
            <h3 className='text-4xl font-bold'>
                Authorized User Homepage
            </h3>
            <div className='details'>
                <h5>{session.user.name}</h5>
                <h5>{session.user.email}</h5>
            </div>
            <div className='flex justify-center'>
                <button className='btn-2 mt-5 px-10 py-1'>
                    <Link href='' onClick={signOut}><p> Sign Out </p></Link>
                </button>
            </div>
            <div className='flex justify-center'>
            <Link href='/profile'>
                <p className='btn-1 mt-5 px-10 py-1'>Profile</p>
            </Link>
            </div>
        </main>
    )
}
