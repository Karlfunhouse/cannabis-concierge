import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <NavBar /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<NavBar />', () => {

  it('User should see a title welcoming them to the application', () => {
    const { getByText } = render(<BrowserRouter> <NavBar /> </BrowserRouter>);

    expect(getByText('Welcome to Concierge')).toBeInTheDocument();
  })

  it('User should see a favorites button', () => {
    const { getByText } = render(<BrowserRouter> <NavBar /> </BrowserRouter>);

    expect(getByText('Favorites - 0')).toBeInTheDocument();
  })

  it('User should see a logout button', () => {
    const { getByText } = render(<BrowserRouter> <NavBar /> </BrowserRouter>);

    expect(getByText('Logout')).toBeInTheDocument();
  })

})
