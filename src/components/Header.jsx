import { useEffect, useState } from 'react'
// header data
import { headerData } from '../data'
// components
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'
// icons
import { TiThMenuOutline } from 'react-icons/ti'

export default function Header() {
  // destructure hero data
  const { logo } = headerData
  // header state
  const [isActive, setIsActive] = useState(false)
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false)
  // show on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header
      className={`${
        isActive
          ? ' h-[100px] lg:h-[110px] shadow-lg'
          : 'h-[120px] lg:h-[150px]'
      } bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img
            src={logo}
            alt="The Void Tattoo"
            className="w-[188px] h-[90px]"
          />
        </a>
        {/* desktop nav */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* mobile nav button */}
        <div className="absolute xl:hidden right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer">
          <TiThMenuOutline
            onClick={() => setMobileNav(!mobileNav)}
            className="text-3xl"
          />
        </div>
        {/* mobile nav */}
        <div
          className={`${mobileNav ? 'max-h-full' : 'max-h-0'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed left-0 w-full h-full transition-all duration-500 bg-white -z-10`}
        >
          <NavMobile />
        </div>
        {/* socials for desktop */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  )
}
