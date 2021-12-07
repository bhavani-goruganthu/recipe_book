import React from 'react';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/css/recipes.css';
import axios from 'axios';

const Recipes = () => {
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  React.useEffect(() => {
    console.log(appUser);
    // axios
    //   .get('http://localhost:4000/api/recipe/user-recipes')
    //   .then((response) => {
    //     console.log(response);
    //   });
  });

  return (
    <div className="d-flex justify-content-around flex-wrap mt-4">
      {/* {results.map((item, i) => ( */}
      {/* <Link to={`/recipe1`}> */}
      <div>
        <div className="card">
          <img
            // src={item.image_url}
            alt="recipe_img"
            width="350px"
            height="250px"
          />
          <div className="">
            <h5 className="text-align-left ml-2 mt-1 primary-color">
              <strong>{/* {item.name} */}</strong>
            </h5>
          </div>
          <div className="">
            <p className="float-left primary-color">Description: </p>
          </div>

          <div className="restaurants-price-tags">
            <span className="text-muted ml-2">
              <br />
              <span className="text-muted ml-2">abc</span>
              <br />
              <span className="text-muted ml-2">kdfsjhg</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
