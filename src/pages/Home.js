import React from 'react';
// import { Link } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import Recipes from './Recipes';
const axios = require('axios');

const Home = () => {
  // React.useEffect(() => {});

  return (
    <div>
      <MenuBar />
      <Recipes />
    </div>
  );
};

export default Home;
