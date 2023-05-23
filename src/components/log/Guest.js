import React from 'react'
import Link from 'next/link'

export default function Guest() {
    return (
        <main className='container mx-auto text-center py-20'>
            <h3 className='text-4xl font-bold'>
                Guest Homepage
            </h3>
            <div className='flex justify-center'>
                <Link href='/login'>
                    <p className='btn-3 mt-5 px-10 py-1'> Sign In </p>
                </Link>
            </div>
        </main>
    )
}
