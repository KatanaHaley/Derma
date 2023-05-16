import React from 'react';
import { Navbar } from '../components';
import { Footer } from '../components';
import Banner from '../components/Banner'
import Hero from '../components/Hero'

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Banner />
      <Navbar />
        <Component {...pageProps} />
      <Footer />  
    </div>
  )
}