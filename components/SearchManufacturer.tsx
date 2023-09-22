'use client'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants'
import { Fragment, useState } from 'react'
import Image from 'next/image'

const SearchManufacturer = ({ selected, setselected }: SearchManufacturerProps) => {
  const [query, setquery] = useState("");

  const filtermanufacturer = query === "" ? manufacturers : manufacturers.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  })
  
  return (
    <div className='search-manufacturer'>
      <Combobox value={selected} onChange={setselected} >
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </Combobox.Button>

          <Combobox.Input className='search-manufacturer__input' placeholder='Volkswagen' onChange={(e) => { setquery(e.target.value) }} />
          <Transition
           as={Fragment}
           leave='transition ease-in duration-100'
           leaveFrom='opacity-100'
           afterLeave={()=>setquery('')}
          >

          <Combobox.Options  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20" >
            {filtermanufacturer.map((item) => {
              return (<Combobox.Option key={item} value={item} className={({ active }) => `relative search-manufacturer__option  ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} >
                {item}
              </Combobox.Option>)
            })}
          </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer