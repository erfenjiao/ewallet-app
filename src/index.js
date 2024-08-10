import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import store from './store';
import router from './router'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
