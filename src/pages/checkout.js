import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/react"
import { selectTotal } from '../slices/basketSlice';

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const {session} = useSession();
  return (
  <div className='bg-gray-100'>
    <Head>
        <title>Checkout</title>
    </Head>
    <Header/>
    <main className='lg:flex max-w-screen-2xl mx-auto'>
      {/* Left Section */}
      <div className='flex-grow m-5 shadow-sm'>
        <Image
          src='https://links.papareact.com/dyz'
          width={1020}
          height={250}
          objectFit='contain'
          className='cursor-pointer'
        ></Image>

        <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4 font-bold'>
              {items.length === 0 ? 'Your Basket is Empty' : 'Shopping Basket'}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
            >
            </CheckoutProduct>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className='flex flex-col bg-white p-10 shadow-md'>
        {items.length > 0 && (
        // like div
        <>
          <h2 className='whitespace-nowrap'>Subtotal ({ items.length } items):
            <span className='font-bold'>
                <Currency quantity={total} currency='USD'></Currency>
            </span>
          </h2>
          <button disabled={!session}
          className={!session ? 'btn-2 mt-2 cursor-not-allowed' : 'btn-1 mt-2'}>
            {!session ? 'Sign In to Checkout' : 'Proceed to Checkout'}
          </button>
        </>
        )}
      </div>
    </main>
  </div>
  )
}

export default Checkout