import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Login /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})


describe('<Login />', () => {

  it('Should not allow a user to login if under 21', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const under21Btn = getByText('I\'m not 21 yet');

    fireEvent.click(under21Btn)
    expect(getByText('Come back and see us when you\'re 21!')).toBeInTheDocument()
  })

  it('Should allow a user to login if over 21', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const nameInput = getByPlaceholderText('username');
    const over21Btn = getByText('I\'m 21+');

    fireEvent.change(nameInput, {target: {value: 'Justin'}})
    fireEvent.click(over21Btn)
    expect(nameInput.value).toBe('Justin')
  })

})
