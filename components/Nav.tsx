'use client'
import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { signIn, signOut, useSession} from "next-auth/react"
const Nav = () => {
  const session = useSession();
  console.log(session.status);
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

        {session.status == "unauthenticated" && (
          <CustomButton
            title="Sign In "
            btnType="button"
            containerStyle="text-primary-blue rounded-full bg-white min-w-[130px] "
            handleclick={() => {
              signIn('google');
            }}
          />

        )}
        {session.status == "authenticated" && <div className="flex gap-2">
        <CustomButton
            title="Sign Out"
            btnType="button"
            containerStyle="text-primary-blue rounded-full bg-white min-w-[130px] "
            handleclick={() => {
              signOut();
            }}
          />
          <Link href='/'>
            <Image
              src={session.data.user.image}
              width={42}
              height={42}
              alt="profile"
              className="rounded-full"
            />
          </Link>
        </div>}
      
      </nav>
    </header>
  )
}

export default Nav