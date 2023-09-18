'use client'
import { CarProps } from '@/types';
import { Fragment, useEffect, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import React from 'react'
import Image from 'next/image';
import { getcarImageUrl } from '@/utils';
import { normalize } from 'path';

interface CarDetailsProps {
  isOpen: boolean
  handleclose: () => void;
  car: CarProps;
}
const CarDetails = ({ isOpen, handleclose, car }: CarDetailsProps) => {
  const [carImageAngle, setcarImageAngle] = useState({
    normalview:'',
    frontview:'',
    topview:'',
    backview:'',
  })
  useEffect(() => {
    const carImage=async() => {
      const url=await getcarImageUrl(car);
      setcarImageAngle((prev)=>({...prev,normalview:url}))
    }
    const carfrontImage=async() => {
      const url=await getcarImageUrl(car,'29');
      setcarImageAngle((prev)=>({...prev,frontview:url}))
    }
    const carTopImage=async() => {
      const url=await getcarImageUrl(car,'33');
      setcarImageAngle((prev)=>({...prev,topview:url}))
    }
    const carBackImage=async() => {
      const url=await getcarImageUrl(car,'13');
      setcarImageAngle((prev)=>({...prev,backview:url}))
    }
  
    carImage();
    carfrontImage();
    carBackImage();
    carTopImage();
  }, [car]);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment} >
        <Dialog open={isOpen} onClose={handleclose} className='relative z-10'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 '
            enterTo='opacity-100 '
            leave='ease-in duration-100'
            leaveFrom='opacity-100 '
            leaveTo='opacity-0 '

          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center min-h-full justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'

              >
                <Dialog.Panel className='relative w-full p-6 flex flex-col max-h-[90vh] max-w-lg overflow-y-auto transform rounded-2xl text-left  transition-all gap-5 bg-white'>
                  <button type='button' onClick={handleclose} className='absolute top-2 right-2 z-10 bg-primary-blue-100 rounded-full p-[3px]' >
                    <Image
                      src='/close.svg'
                      alt='Close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <div className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center'>
                      {carImageAngle && <Image
                        src={carImageAngle.normalview}
                        alt="car model"
                        fill priority
                        className='object-contain'
                      />}
                    </div>
                    <div className='flex  gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      {carImageAngle &&<Image
                          src={carImageAngle.frontview}
                          alt="car model"
                          fill priority
                          className='object-contain'
                        />}
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      {carImageAngle &&<Image
                          src={carImageAngle.topview}
                          alt="car model"
                          fill priority
                          className='object-contain'
                        />}
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      {carImageAngle &&<Image
                          src={carImageAngle.backview}
                          alt="car model"
                          fill priority
                          className='object-contain'
                        />}
                      </div>
                    </div>

                    <div className='flex flex-col justify-between gap-3'>
                      <h2 className='capitalize font-semibold text-xl'>{car.make} {car.model} </h2>
                      <div className='flex flex-wrap gap-4'>
                        {Object.entries(car).map(([key, value]) =>
                        (
                          <div className='flex justify-between gap-5 w-full text-right' key={key}>
                            <h4 className='capitalize text-gray' >{key.split('_').join(' ')} </h4>
                            <p className='text-black-100 font-semibold'>{value}</p>
                          </div>
                        )
                        )}
                      </div>
                    </div>

                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>


        </Dialog>
      </Transition>

    </>
  )
}

export default CarDetails