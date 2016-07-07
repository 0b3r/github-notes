import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import createRoot from './components/Root';
import configureStore from './store';

const Root = createRoot(React);
const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

