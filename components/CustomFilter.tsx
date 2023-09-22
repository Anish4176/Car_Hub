'use client'
import { useState, Fragment } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Listbox, Transition } from "@headlessui/react"
import { CustomFilterProps } from "@/types"
import { setFips } from "crypto"

const CustomFilter = ({ title, options, setfilter }: CustomFilterProps) => {
  
  const [selected, setselected] = useState(options[0]);

  return (
    <div className="w-fit relative cursor-pointer">
      <Listbox
        value={selected}
        onChange={(e) =>{
          console.log(e);
           setselected(e);
           setfilter(e.value);
        }
          }
      >
        <div>
          <Listbox.Button className='custom-filter__btn'>
            <span className="block truncate">
              {selected.title}
            </span>
            <Image
              src='/chevron-up-down.svg'
              alt='chevron-up-down'
              height={20}
              width={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='ease-in duration-100 transition'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options z-30'>

              {options.map((item) =>
              (
                <Listbox.Option
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  key={item.title}
                  value={item}>
                  {item.title}
                </Listbox.Option>
              )
              )}

            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter