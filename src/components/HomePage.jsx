import React from 'react';
import Container from './Container';
import Latest from './Main/latest';
import Slider from './Main/main';

const HomePage = () => (
  <Container>
    <div className="main-container">
      <Slider />
      <Latest />
    </div>
  </Container>
);

export default HomePage;
