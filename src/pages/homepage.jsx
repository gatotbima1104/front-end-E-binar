import React from 'react'
import Menu from '../components/navigasiBar';
import Cards from '../components/category';
import Knowme from '../components/knowladge';
import Footer from '../components/footer';
import Events from '../components/events';
import Banner from '../components/banner';

const Home = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <Cards /> 
      <Knowme />
      <Events />
      <Footer />
    </div>
  )
}

export default Home
