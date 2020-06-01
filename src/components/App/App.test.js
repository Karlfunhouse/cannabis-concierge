import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
