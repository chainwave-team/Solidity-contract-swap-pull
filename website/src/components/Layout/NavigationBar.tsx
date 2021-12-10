import Link from 'next/link'
import { useRef, useState } from 'react'
import Headroom from 'react-headroom'
import { useEventListener, useMediaQuery, useOnClickOutside } from 'usehooks-ts'

import { title, mediaQueries } from '../../config'
import { BurgerIcon } from '../Icons'
import ConnectButton from './ConnectButton'

const NavigationBar =() => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<boolean>(false)
  const isDesktop = useMediaQuery(`(min-width: ${mediaQueries.md})`)
  const showMobileMenu = !isDesktop && open

  useOnClickOutside(menuRef, () => setOpen(false))
  useEventListener('scroll', () => {
    if (open) {
      setOpen(false)
    }
  })

  const toggle = () => setOpen(prev => !prev)

  return (
    <Headroom className="w-full">
      <div ref={menuRef} className={`${showMobileMenu ? "flex-wrap" : ""} w-full max-w-7xl mx-auto flex justify-between px-6 relative`}>
        <div className="h-20 flex">
          <Link href="/">
            <a className="my-auto text-md sm:text-xl font-extrabold tracking-tight text-gray-50">
              {title}
            </a>
          </Link>
        </div>

        <button type="button" className="block md:hidden" onClick={toggle}>
          <BurgerIcon />
        </button>
        
        <ul className={`${showMobileMenu ? "px-6 py-2 w-full absolute top-20 left-0" : "hidden"} md:flex font-mono text-sm sm:text-base font-medium bg-gray-900`}>
          <li className="mr-6 my-auto py-2">
            <Link href="/traits">
              <a className="/traits" href="#">Traits</a>
            </Link>
          </li>
          <li className="my-auto py-2">
            <ConnectButton />
          </li>
        </ul>
      </div>
    </Headroom> 
  )
}

export default NavigationBar
