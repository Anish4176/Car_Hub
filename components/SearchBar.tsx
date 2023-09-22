'use client'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import React, { useState } from 'react'
import { resourceUsage } from 'process'
import { useRouter } from 'next/navigation'

const SearchButton=({otherClasses}:{otherClasses:string})=>(
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
   <Image
   src='/magnifying-glass.svg'
   alt='Magnifying glass'
   height={40}
   width={40}
   className='object-contain'
   />
  </button>
)
const SearchBar = ({setManufacturer,setModel}) => {
    const router= useRouter();
    const [searchManufacturer, setsearchManufacturer] = useState('');
    const [searchModel, setsearchModel] = useState('');
    const handlesubmit=(e: React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          if(searchManufacturer=='' && searchModel==''){
            return alert('Please fill in the search bar')
          }
          setManufacturer(searchManufacturer);
          setModel(searchModel);

    }
   
  return (
    <form onSubmit={handlesubmit} className='searchbar'>
        <div className='searchbar__item'>
          <SearchManufacturer
           selected={searchManufacturer}
           setselected={setsearchManufacturer}
          />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <div className='searchbar__item'>
          <Image
          src='/model-icon.png'
          alt='Model'
          height={25}
          width={25}
          className='absolute w-[20px] h-[20px] ml-4'
          />
          <input type="text" value={searchModel} name='model' onChange={(e)=>setsearchModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar