import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Car Hub"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">Carhub 2023 <br /> All Rights Reserved &copy; </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => {
            return <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((items) => {
                return <Link key={items.title}
                  href={items.url}
                  className="text-gray-500"
                >
                  {items.title}
                </Link>
              })}
            </div>
          })
          }
        </div>
      </div>

      <div className="flex justify-between items-center botder-t border-gray-100 mt-10 flex-wrap sm:px-16 px-6 py-10">
        <p>@2023 Carhub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer