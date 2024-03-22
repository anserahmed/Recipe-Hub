import React from 'react';
import { useLocation } from 'react-router-dom';

const Recipe = () => {
  const { state } = useLocation();
  console.log({ state });

  // remove HTML tags
  const removeHtmlTags = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || '';
  };

  return (
    <div className='bg-dark-subtle'>
      <div className=" flex flex-column">
        <div><h1 className='text-center googlefont fw-bold my-7 fs-1 '>{state?.title}</h1></div>

        <div className='justify-content-center  flex my-7 mx-20 px-10 gap-2'><img className='rounded-end-circle' src={state?.image} alt={state?.title} />
          <p className='p-5 fst-italic'>{removeHtmlTags(state?.summary)}</p>

        </div>


        <div>
          <ul class="list-group text-center list-group-flush">
            <li class="list-group-item">        <p>Aggregate Likes: {state?.aggregateLikes}</p>
            </li>
            <li class="list-group-item">        <p>Cooking Minutes: {state?.cookingMinutes}</p>
            </li>
            <li class="list-group-item">        <p>Ready In Minutes: {state?.readyInMinutes}</p>
            </li>
            <li class="list-group-item">        <p>Price Per Serving: {state?.pricePerServing}</p>
            </li>
            <li class="list-group-item">         <p>Vegetarian: {state?.vegetarian ? 'Yes' : 'No'}</p>
            </li>
            <li class="list-group-item">         <p>Vegan: {state?.vegan ? 'Yes' : 'No'}</p>
            </li>
            <li class="list-group-item">         <p>Dish Types: {state?.dishTypes.join(', ')}</p>
            </li>
            <li class="list-group-item">         <p>Preparation Minutes: {state?.preparationMinutes}</p>
            </li>


          </ul>

          <p className='fs-4 text-center font-monospace fw-semibold text-primary'> Ingredients:</p>
          <ol class="list-group list-group-numbered">

            {state?.extendedIngredients.map((ingredient) => (
              <li className='list-group-item-danger text-center' key={ingredient.id}>{ingredient.name}</li>
            ))}

          </ol>
        </div>
      </div>

    </div>
  );
};

export default Recipe;
