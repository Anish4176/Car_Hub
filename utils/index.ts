import { CarProps, FilterProps } from "@/types";

export const fetchallCars = async ({manufacturer,year,fuel,limit,model}:FilterProps) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e6fe6ac670mshd452c2d62edc0d1p1c32ebjsnb4b9e1acdfe8',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, options
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }

}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = (basePricePerDay + mileageRate + ageRate)* 83;
  
    return rentalRatePerDay.toFixed(0);
  };

export const getcarImageUrl=async(car:CarProps, angle? : string)=>{
   const url= new URL('http://cdn.imagin.studio/getimage');
   const {make,year,model}=car;

   url.searchParams.append('customer','hrjavascript-mastery');
   url.searchParams.append('make',make);
   url.searchParams.append('modelFamily', model.split(' ')[0]);
   url.searchParams.append('zoomType','fullscreen');
   url.searchParams.append('modelYear',`${year}`);
   url.searchParams.append('angle',`${angle}`);
  
   return `${url}`;
}   