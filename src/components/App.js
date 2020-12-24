import React from 'react';
import '../styles/App.css';
import Carousel from './Carousel';
import { slides } from './content';

const App = () => {
  return <Carousel slides={slides} numberOfSlidesOnPage={2} numberOfSlidesOnPageMobile={1} />;
};

export default App;
