import { FC } from 'react'
import Navbar from './navbar'

const Layout: FC =({ children }) => {
  return (
    <>
      <Navbar />
      <main>
          {children}
      </main>
      <footer className="my-16 md:my-24">
        <p className="text-xl tracking-tight text-pink-400 my-4 font-mono text-center">
          kiss
        </p>
      </footer>
    </>
  )
}

export default Layout