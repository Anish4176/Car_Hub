'use client'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import {fetchallCars }from '@/utils'
import CarCard from '@/components/CarCard'
import { CarProps } from '@/types'
import { fuels, yearsOfProduction } from '@/constants'
import ShowMore from '@/components/ShowMore'
import { useState,useEffect } from 'react'
import Image from 'next/image'

export default  function Home() {
  const [Cars, setCars] = useState([]);
  const [manufacturer, setManufacturer] = useState('');
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState('');

  //filter
  const [fuel, setFuel] = useState('');
  const [year, setyear] = useState(2022)

  const [limit, setLimit] = useState(10)

  
  const allCars = async()=>{
    setLoading(true);
    try{
      const result=await fetchallCars({
        manufacturer:manufacturer ,
        year: year  ,
        fuel: fuel ,
        limit: limit ,
        model: model 
      });
      
      setCars(result);
      console.log(result);
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  } 
  console.log(allCars.length);
  useEffect(() => {
    allCars();
  }, [manufacturer,model,fuel,year,limit])
  // console.log(response);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' setfilter={setFuel} options={fuels} />
            <CustomFilter title='year' setfilter={setyear} options={yearsOfProduction} />
          </div>
        </div>
        
        {Cars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {Cars?.map((car: CarProps) => (
                <CarCard  car={car} />
              ))}
            </div>
            {/* {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                 src='/loader.svg'
                 alt='loader'
                 height={50}
                 width={50}
                 className='object-contain'
                />
              </div>
            )} */}

            <ShowMore
             pageNumber={(limit )/10}
             isNext={(limit ) > Cars.length}
             setlimit={setLimit}
            />
          </section>

        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results found</h2>
            {/* <p>{allCars && allCars.message} </p> */}
          </div>
        )}
      </div>
    </main>
  )
}
