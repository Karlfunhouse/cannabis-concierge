import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from '../Login/Login'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<App />', () => {

  it('should allow for user login', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const over21Btn = getByText(`I'm 21+`);
    const nameInput = getByPlaceholderText('username');

    fireEvent.change(nameInput, {target: {value: 'Justin'}})
    expect(nameInput.value).toBe('Justin')
    fireEvent.click(over21Btn)

    expect(nameInput).not.toBeInTheDocument()
  })


})
