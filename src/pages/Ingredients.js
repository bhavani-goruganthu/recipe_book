import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
// import { Link } from 'react-router-dom';
import '../assets/css/ingredients.css';
import axios from 'axios';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:4000/api/ingredient/all-ingredients')
      .then((response) => {
        console.log(response.data);
        setIngredients(response.data);
      });
  }, []);

  return (
    <>
      <MenuBar />
      <div className="container w-50 mt-3">
        <h2>Ingredients</h2>
        <p>All available Ingredients are listed below:</p>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Calorie per Unit</th>
              <th>Measured in</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.calorie_unit}</td>
                <td>{item.unit_denomination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Ingredients;
