## POC documentation

This is a test on how to user react / redux with an api like github

As long as github seems that is not returning a jwt token that I can just decode, I've done an extra call to get the user info as part as the login process.

I've added tests and most of the code is covered:

```
 PASS  src/App.test.tsx
 PASS  src/features/pages/Home.test.tsx
 PASS  src/features/pages/swapi/Swapi.test.tsx
 PASS  src/features/pages/user/Repositories.test.tsx
 PASS  src/features/github/githubSlice.spec.ts
 PASS  src/features/swapi/swapiSlice.spec.ts

Test Suites: 6 passed, 6 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        3.288 s
Ran all test suites.

Watch Usage: Press w to show more.

```

There are three slices, one per screen, two of them for github, (auth server/resource server) and another one for swapi (star wars api) in which i've also developed an extra "delete" button.


## Original react documentation: 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
