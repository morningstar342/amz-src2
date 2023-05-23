/* es7 needed */
/* rfce */
import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
    const session = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    console.log(session)
    return (
    <header>
        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 mx-4 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    onClick={() => router.push('/')}
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                >
                </Image>
            </div>

            {/* Search */}
            <div className='hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 border-2 border-white focus:border-yellow-400' type="text" name="search" placeholder='Search Your Product' />
                <SearchIcon className='h-12 p-4'></SearchIcon>
            </div>


            {/* Right Section */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div onClick={!session ? signIn : signOut} className='link'>
                    <p className='hover:underlibe'>
                        {session ? 'Hello, ' + session.user : 'Sign In'}
                    </p>
                    <p className='font-bold md:text-sm'>Account & Lists</p>
                </div>

                <div className='link'>
                    <p>Returns</p>
                    <p className='font-bold md:text-sm'>& Orders</p>
                </div>

                <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                        {items.length}
                    </span>
                    <ShoppingCartIcon className='h-10'></ShoppingCartIcon>
                    <p className='hidden md:inline font-bold mt-2 md:text-sm'>Basket</p>
                </div>
            </div>
        </div>


        {/* Bottom Nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'></MenuIcon>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Bussiness</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Foods & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
    )
}

export default Header
