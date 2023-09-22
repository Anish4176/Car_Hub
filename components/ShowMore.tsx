'use client'

import { ShowMoreProps } from "@/types"
import CustomButton from "./CustomButton"
import { useRouter } from "next/navigation"

const ShowMore = ({pageNumber,isNext,setlimit}:ShowMoreProps) => {
    
    const handlenavigation = ()=>{
        const newlimit= (pageNumber+1)*10;
        setlimit(newlimit);
        
      
    }
  return (
    <div className="w-full flex-center gap-5 mt-10 ">

        {!isNext && (
            <CustomButton
            title="Show More"
            containerStyle="bg-primary-blue rounded-full text-white"
            handleclick={handlenavigation}
            />
        ) }
        
    </div>
  )
}

export default ShowMore