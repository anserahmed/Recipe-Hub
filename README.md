# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



<!-- RECIPE.jsx -->
import React from 'react';
import { useLocation } from 'react-router-dom';

const Recipe = () => {
  const { state } = useLocation();
  console.log({ state });

  // Function to remove HTML tags from a string
  const removeHtmlTags = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || '';
  };

  return (
    <div>
      <h1>{state?.title}</h1>
      <img src={state?.image} alt={state?.title} />
      <p>{removeHtmlTags(state?.summary)}</p>
      <p>Aggregate Likes: {state?.aggregateLikes}</p>
      <p>Cooking Minutes: {state?.cookingMinutes}</p>
      <p>Preparation Minutes: {state?.preparationMinutes}</p>
      <p>Ready In Minutes: {state?.readyInMinutes}</p>
      <p>Price Per Serving: {state?.pricePerServing}</p>
      <p>Vegetarian: {state?.vegetarian ? 'Yes' : 'No'}</p>
      <p>Vegan: {state?.vegan ? 'Yes' : 'No'}</p>
      <p>Dish Types: {state?.dishTypes.join(', ')}</p>
      <p>Ingredients:</p>
      <ul>
        {state?.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <ol>
        {state?.instructions[0]?.steps.map((step, index) => (
          <li key={index}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
