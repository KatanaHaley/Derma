import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Derma.</title>
        </Head>
        <header>
        <Navbar />
        </header>
        <main>
            {children}
        </main>
        {/* <footer>
            <Footer />
        </footer> */}
    </div>
  )
}

export default Layout