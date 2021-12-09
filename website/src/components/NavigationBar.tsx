import Link from 'next/link'
import { useRef, useState } from 'react'
import Headroom from 'react-headroom'
import { useEventListener, useMediaQuery, useOnClickOutside } from 'usehooks-ts'

import { title, mediaQueries } from '../config'
import useWeb3 from '../hooks/useWeb3'
import Button from './button'
import Modal, { useModal } from './Modal'

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
            <a className="my-auto font-mono font-medium text-md sm:text-xl tracking-tight text-gray-50">
              {title}
            </a>
          </Link>
        </div>

        <button type="button" className="block md:hidden" onClick={toggle}>
          <BurgerIcon />
        </button>
        
        <ul className={`${showMobileMenu ? "px-6 py-2 w-full absolute top-20 left-0" : "hidden"} md:flex font-mono text-sm sm:text-base font-medium bg-gray-900`}>
          <li className="mr-6 my-auto py-2">
            <a className="" href="#">Link</a>
          </li>
          <li className="mr-6 my-auto py-2">
            <a className="" href="#">Link</a>
          </li>
          <li className="my-auto py-2">
            <ConnectWalletButton />
          </li>
        </ul>
      </div>
    </Headroom> 
  )
}

export default NavigationBar

const BurgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
)

const ConnectWalletButton = () => {
  const { active, account, connect, disconnect } = useWeb3()
  const [open, { openModal, closeModal }] = useModal()

  return active && account 
    ? (
      <>
        <a onClick={openModal}>
          {`${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}`}
        </a>

        <Modal 
          open={open && active} 
          onClose={closeModal} 
          title="Account" 
          content={account} 
          footer={(
            <a role="button" className="text-sm" onClick={disconnect}>Disconnect</a>
          )}
        />
      </>
    ) : (
      <Button variant="primary" onClick={connect}>Connect</Button>
    )
}
