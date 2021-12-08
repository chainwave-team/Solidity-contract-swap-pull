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
      <p className="text-xl tracking-tight text-pink-500 my-4 font-mono text-center">
        kiss 😘
      </p>
    </footer>
  )
}