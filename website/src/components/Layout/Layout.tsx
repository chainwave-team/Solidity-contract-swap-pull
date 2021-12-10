import { FC } from 'react'

import NavigationBar from './NavigationBar'

const Layout: FC =({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

function Footer() {
  return (
    <footer className="my-16 md:my-24">
      <p className="text-xl sm:text-4xl leading-10 font-extrabold tracking-tight text-gray-50 text-center">
        Be the different, love.
      </p>
    </footer>
  )
}