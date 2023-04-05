import React from 'react'
import Board from './components/Board';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className='container'>
        <Header />
        <Board />
        <Footer />

    </div>
  )
}

export default Layout