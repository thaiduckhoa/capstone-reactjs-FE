import React from 'react';
import { Banner, TrustedBy, CatCard, Features, Testimonial, Explore } from '../../components';

import "./HomePage.scss";

export const HomePage = () => {

  return (
    <div className='homePage'>
      <Banner />
      <TrustedBy />
      <CatCard />
      <Features>

        <Testimonial />
        <Explore/>
      </Features>



    </div>
  );
};