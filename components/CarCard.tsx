'use client'
import { CarProps } from '@/types'
import { calculateCarRent, getcarImageUrl } from '@/utils'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'

interface CarCardProps {
  car: CarProps
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;
  const CarRent = calculateCarRent(city_mpg, year);
  const [isOpen, setisOpen] = useState(false);
  const [imageUrl, setimageUrl] = useState('');
  useEffect(() => {
    const carImage=async() => {
      const url=await getcarImageUrl(car);
      setimageUrl(url);
    }
  
    carImage();
  }, [car]);
  
  
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold '>
          ₹
        </span>
        {CarRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        {imageUrl && <Image
          src={imageUrl}
          alt="car model"
          fill priority
          className='object-contain'
        />}
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex justify-between group-hover:invisible w-full text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering wheel'
            />
            <p>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/tire.svg'
              width={20}
              height={20}
              alt='tire'
            />
            <p>
              {drive.toUpperCase()}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/gas.svg'
              width={20}
              height={20}
              alt='gas'
            />
            <p>
              {city_mpg} MPG
            </p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyle='w-full py-[16px] rounded-full bg-primary-blue '
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleclick={() => setisOpen(true)}
          />
        </div>
      </div>
     <CarDetails
      isOpen={isOpen}
      handleclose={() => setisOpen(false) }
      car={car}
     />
    </div>
  )
}

export default CarCard