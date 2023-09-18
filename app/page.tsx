import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import {fetchallCars }from '@/utils'
import CarCard from '@/components/CarCard'
import { CarProps } from '@/types'
export default async function Home({searchParams}) {
  
  const allCars = await fetchallCars({
    manufacturer:searchParams.manufacturer || '',
    year:searchParams.year  || 2022,
    fuel:searchParams.fuel || '',
    limit:searchParams.limit || 10,
    model:searchParams.model || ''
  });
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
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
        {allCars && allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>

              {allCars.map((car: CarProps) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results found</h2>
            <p>{allCars && allCars.message} </p>
          </div>
        )}
      </div>
    </main>
  )
}
