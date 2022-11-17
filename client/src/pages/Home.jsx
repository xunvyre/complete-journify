import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Journals from '../components/Journals/Journals';
import Nav from '../components/Nav/Nav';
import Upload from '../components/Upload/Upload';

const Home = () =>
{
  return(
    <>
        <Header/>
        <Nav/>
        <Journals/>
        <Upload/>
        <Footer/>
    </>
  )
};

export default Home;