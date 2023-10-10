import React, { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import Testimonials from '../components/Home/Testimonials';
import Features from '../components/Home/Features';

export default function Home() {
  return (
    <Fragment>
      <Hero/>
      <Features/>
      <Testimonials/>
    </Fragment>
  );
}
