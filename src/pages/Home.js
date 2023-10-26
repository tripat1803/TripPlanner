import React, { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import Testimonials from '../components/Home/Testimonials';
import Features from '../components/Home/Features';
import ListingPage from '../components/Home/ListingPage';

export default function Home() {
  return (
    <Fragment>
      <Hero/>
      {/* <ListingPage/>
      <Features/>
      <Testimonials/> */}
    </Fragment>
  );
}
