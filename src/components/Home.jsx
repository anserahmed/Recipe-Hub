import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import recipe from "../Assests/recipehub.png";


const Home = () => {
  const navigate = useNavigate();

  const handleRecipeClick = async (recipeId) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
          apiKey: '1dd76839c72e49c1b3deb7800b161ccb', // Replace 'YOUR_API_KEY' with your actual API key
        },
      });

      // Navigate to recipe details page with the fetched data
      navigate('/recipe', { state: response.data });
    } catch (error) {
      console.error('Error fetching recipe information:', error);
    }
  };

  return (
    <><div className=''>
      <h1 className=' py-3 fs-3 mx-20 fw-semibold font-monospace'>List of Recipes</h1>
      <ul class="list-group bg-success-subtle mx-20 list-group-numbered">
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(1)}>Fried Anchovies with Sage</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(2)}>Anchovies Appetizer With Breadcrumbs & Scallions</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(3)}>Carrots, Cauliflower And Anchovies</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(4)}>Bap Story: Stir Fried Anchovies (Myulchi Bokkeum)</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(5)}>Bread, Butter And Anchovies</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(6)}>Fried Anchovies
        </button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(7)}>Tomato & Anchovies With Bread Crumbs, Basil & Red Onion Recipe</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(9)}>Marinated Fresh Anchovies: Alici Marinate</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(10)}>Marinated Boquerones</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(11)}>Spaghetti With Walnuts And AnchoviesRoasted Peppers with Boquerones</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(12)}>Roasted Peppers with Boquerones</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(13)}>Anchovies, Tomatoes And Green Beans Couscous</button></li>

        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(16)}>Sliced Baguette With Radishes And Anchovy Butter</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(17)}>Savory Slow Roasted Tomatoes with Filet of Anchovy</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(18)}>Anchovy Vinaigrette</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(19)}>No-knead Fennel & Anchovy Pizza</button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(20)}>Pan-roasted East Coast Skate, Anchovy And Broccoli Pickle</button></li>
        {/* <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(26)}></button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(28)}></button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(213)}></button></li>
        <li class="list-group-item"><button class="btn btn-success" onClick={() => handleRecipeClick(2130)}></button></li> */}

      </ul>
      </div>
    </>

  );
};

export default Home;
