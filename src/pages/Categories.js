import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
// import { Link } from 'react-router-dom';
import '../assets/css/categories.css';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:4000/api/category/all-categories')
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      });
  }, []);

  return (
    <>
      <MenuBar />
      <div className="container w-25 mt-3">
        <h2>Categories</h2>
        <p>All available categories are listed below:</p>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Cuisine</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, i) => (
              <tr>
                <td className="w-25">{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.cuisine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Categories;
