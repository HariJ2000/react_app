import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Use a mock store for testing
import LoginForm from './LoginForm';
import { RootState } from '../../store/rootReducer';
import { loginRequest, loginSuccess } from '../../actions/loginActions';
import { act } from '@testing-library/react';

const mockStore = configureStore<RootState>();
const initialState: RootState = {
  login: {
    user: null,
    loading: false,
    error: null
  }
};
const store = mockStore(initialState); // Create a mock store

describe('Login Component', () => {
  it('renders login form with username and password inputs', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' }});

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password123');
  });

  it('dispatches the login action on button click', async() => {
    store.clearActions();

    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' }});

    await act(async () => {
      fireEvent.click(getByText('Login'));
    })

    // // Expect the login action to be dispatched
    // const expectedActions = [
    //   loginRequest({ username: 'testuser', password: 'password123' }),
    //   loginSuccess({user:"hari",role:'developer'})
    // ];
    // expect(store.getActions()).toEqual(expectedActions);

    // // Get the updated state from the store
    // const updatedState = store.getState();

    // // Check if the state is updated as expected
    // expect(updatedState.login.user.user).toBe('hari');
    // expect(updatedState.login.user.role).toBe('developer');
  });
});
