import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/css/recipes.css';
import axios from 'axios';

const Recipes = () => {
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [userRecipes, setUserRecipes] = useState([]);
  React.useEffect(() => {
    console.log(appUser);
    if (appUser !== 0) {
      axios
        .get('http://localhost:4000/api/recipe/user-recipes', {
          params: {
            userID: appUser,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserRecipes(response.data);
        });
    }
  }, [appUser]);

  return (
    <div className="d-flex justify-content-around  flex-wrap m-4">
      {userRecipes.map((item, i) => (
        <>
          {/* // <Link to={`/recipe1`}> */}
          <div key={i} className="card recipe-card">
            <img
              className="rounded"
              src={item.image_url}
              alt="recipe_img"
              width="328px"
              height="250px"
            />
            <div className="">
              <h5 className="text-center ml-2 mt-1 primary-color">
                <strong>{item.name}</strong>
              </h5>
            </div>
            <p className="text-dark h6">
              <b className="primary-color">Description: </b>
              <i>{item.description}</i>
            </p>
            <span className="text-muted ml-2 mt-auto">
              Calories: {item.calories}
            </span>
            <div className="mx-auto mt-auto">
              <button
                type="button"
                className="btn btn-info mt-auto"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Instructions
              </button>
            </div>
          </div>

          {/* <!-- The Modal --> */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h4 className="modal-title">{item.name}</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <b>Instructions:</b>
                  {item.instructions}
                </div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Recipes;
