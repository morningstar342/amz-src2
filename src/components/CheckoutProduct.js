import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
    id, title, rating, price, description, category, image, hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () =>{
  const product = {
    id, title, rating, price, description, category, image, hasPrime,
  };

  // Push Items into Redux
  dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () =>{
    const product = {
      id, title, rating, price, description, category, image, hasPrime,
    };

    // Remove Item from Redux
    dispatch(removeFromBasket({id}));
  };

  return (
  <div className='grid grid-cols-5'>
    <Image
      src={image}
      width={200}
      height={200}
      objectFit='contain'
      alt='image'
    >
    </Image>

    <div className='col-span-3 mx-5'>
      <p>{title}</p>
      <div className='flex'>
        {Array(rating).fill().map((_,i) => (
          <StarIcon key={i} className='h-5 text-yellow-500'></StarIcon>
        ))}
      </div>
      <p className='text-xs my-3 line-clamp-3'>{description}</p>

      <div className='my-5'>
        <Currency quantity={price} currency='USD'></Currency>
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img loading='lazy' className='w-12' src="https://links.papareact.com/fdw" alt="" />
          <p className='text-xs text-gray-500'>FREE Next-dat Delivery</p>
        </div>
      )}
    </div>
    <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBasket} className='btn-1'>Add to Basket</button>
        <button onClick={removeItemFromBasket} className='btn-1'>Remove from Basket</button>
    </div>
  </div>
  )
}

export default CheckoutProduct