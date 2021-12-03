import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/recipes.css';

const Recipes = () => {
  return (
    <div className="d-flex justify-content-around flex-wrap mt-4 restaurants-links">
      <Link to={`/recipe1`}>
        <div>
          <div className="card">
            {/* <img
                src={
                  'data:image/jpeg;base64,' +
                  new Buffer(item.Display_Pic_Thumbnail)
                }
                alt=""
                width="350px"
                height="250px"
              /> */}
            <div className="row">
              <div className="col">
                <h5 className="text-align-left ml-2 mt-1 primary-color">
                  <strong>Recipe 1</strong>
                </h5>
              </div>
              <div className="col">
                <p className="float-right mr-2 primary-color">Description</p>
              </div>
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
      </Link>
    </div>
  );
};

export default Recipes;
