import { FC } from 'react'

import NavigationBar from './NavigationBar'

const Layout: FC =({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

function Footer() {
  return (
    <footer className="my-16 md:my-24">
      <p className="text-xl sm:text-4xl leading-10 font-extrabold tracking-tight text-gray-50 text-center">
        Be the different, love.
        <br />
        Be original, be strange.
      </p>
    </footer>
  )
}