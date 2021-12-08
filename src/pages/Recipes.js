import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/css/recipes.css';
import axios from 'axios';

const Recipes = () => {
  const navigate = useNavigate();
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [userRecipes, setUserRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [clickedInstructionsID, setClickedInstructionsID] = useState(0);
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const [recipeCalories, setRecipeCalories] = useState(0);
  const [recipeImageURL, setRecipeImageURL] = useState('');

  const onClickAddModal = (event) => {
    setRecipeName('');
    setRecipeDescription('');
    setRecipeInstructions('');
    setRecipeCalories('');
    setRecipeImageURL('');
  };

  const onSubmitAddRecipe = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/api/recipe/add-recipe', {
        recipeName: recipeName,
        recipeDescription: recipeDescription,
        recipeInstructions: recipeInstructions,
        recipeCalories: recipeCalories,
        recipeImageURL: recipeImageURL,
        appUser: appUser,
      })
      .then((response) => {
        alert('New Recipe Added!!');
        navigate('/recipes');
        console.log(response.data);
        onClickAddModal();
      });
  };

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
    <div className="container mt-4">
      <div className="mx-auto text-center">
        <button
          type="button"
          className="btn primary-color secondary-color-bg"
          data-bs-toggle="modal"
          data-bs-target="#myAddModal"
          // onClick={onClickAddModal}
        >
          Add New Recipe
        </button>
      </div>
      <br />
      <div className="d-flex justify-content-around  flex-wrap mx-4">
        {userRecipes.map((item, i) => (
          <div className="card recipe-card mt-4" key={i}>
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
                onClick={(e) => {
                  setClickedInstructionsID(item.rid);
                }}
              >
                Instructions
              </button>
            </div>
          </div>
        ))}
        {/* <!-- The Instructions Modal --> */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            {userRecipes
              .filter((item1) => item1.rid === clickedInstructionsID)
              .map((item, i) => (
                <div className="modal-content" key={i}>
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
              ))}
          </div>
        </div>
      </div>

      {/* <!-- The Add Recipe Modal --> */}
      <div className="modal fade" id="myAddModal">
        <div className="modal-dialog modal-l modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title font-weight-bolder">Add Recipe</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form
                className="mx-auto login-container"
                method="post"
                encType="application/x-www-form-urlencoded"
              >
                <div className="mx-3 my-2">
                  <input id="redirect-input" type="hidden" name="redirect" />
                  <h6 className="text-info text-center">
                    All fields are Mandatory
                  </h6>
                  <label
                    htmlFor="RecipeName"
                    className="login-label  first-label"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="login_input-field"
                    type="text"
                    placeholder="e.g. Vegan Burger"
                    required
                    name="Name"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                  />
                  <label htmlFor="Description" className="login-label">
                    Description
                  </label>
                  <textarea
                    className="form-control login_input-field"
                    rows="3"
                    placeholder="e.g. Tasty & Healthy"
                    id="recipeDescription"
                    name="Description"
                    required
                    value={recipeDescription}
                    onChange={(e) => setRecipeDescription(e.target.value)}
                  />
                  <label htmlFor="recipeInstructions" className="login-label">
                    Instructions
                  </label>
                  <textarea
                    className="form-control login_input-field"
                    rows="5"
                    id="recipeInstructions"
                    name="Instructions"
                    required
                    value={recipeInstructions}
                    onChange={(e) => setRecipeInstructions(e.target.value)}
                    placeholder="e.g. Step 1..."
                  />
                  <label htmlFor="Calories" className="login-label">
                    Calories
                  </label>
                  <input
                    className="login_input-field"
                    id="Calories"
                    type="number"
                    placeholder="e.g. 570"
                    required
                    name="Calories"
                    value={recipeCalories}
                    onChange={(e) => setRecipeCalories(e.target.value)}
                  />
                  <label htmlFor="imageUrl" className="login-label">
                    Image URL
                  </label>
                  <input
                    className="login_input-field"
                    id="imageUrl"
                    type="url"
                    placeholder="https://imagesvc.com..."
                    required
                    name="imageUrl"
                    value={recipeImageURL}
                    onChange={(e) => setRecipeImageURL(e.target.value)}
                  />
                  <br />
                  <button
                    type="submit"
                    className="login_button d-flex justify-content-center mt-3"
                    value="submit"
                    data-bs-dismiss="modal"
                    onClick={onSubmitAddRecipe}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
