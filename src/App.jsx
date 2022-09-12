import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Service from './component/service/Service'
import Testimonials from './component/testimonials/Testimonials'
import Footer from './component/footer/Footer'
import Contact from './component/contatct/Contact'
import Portofolio from './component/portofolio/Portofolio'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portofolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App