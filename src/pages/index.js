import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Landing from '../sections/Landing';
import About from '../sections/About';
import AboutCTO from '../sections/AboutCTO';
import Reviews from '../sections/Reviews';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout id="outer-container">
    <Menu />
    <div id="page-wrap">
      <Landing />
      <About />
      <AboutCTO />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
