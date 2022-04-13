import App from './App';
/*
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);
*/

/*
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
*/
//import { createRoot } from "react-dom/client";
/*
import * as ReactDOMClient from 'react-dom/client';

import App from "./App";

test("renders learn react link", () => {

  const rootElement = document.createElement("div");
  console.log(rootElement);
  rootElement.setAttribute("id", "root");
  console.log(rootElement);
  document.getElementsByTagName("body")[0].appendChild(rootElement);

  const container = document.getElementById("root");
  const aaa = ReactDOMClient.createRoot(container).render(<App />);
  console.log(aaa, container)
  const { getByText } = aaa

  expect(getByText(/learn/i)).toBeInTheDocument();
});
*/