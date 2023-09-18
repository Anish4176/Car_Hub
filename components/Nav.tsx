import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
const Nav = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4'>
        <Link href={'/'}>
          <Image
          src={'/logo.svg'}
          alt="Car Hub"
          width={118}
          height={18}
          className="object-contain"
          />
        </Link>

        <CustomButton
        title="Sign In "
        btnType="button"
        containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default Nav