import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createLoginForm } from './login-form';

describe.todo('Login Form', async () => {
  it('should render a login form', async () => {});

  it('should render a login form with a custom action', async () => {
    // Can you make sure that the form we render has an `action` attribute set to '/custom'?
  });

  it('should render a login form with a custom method', async () => {
    // Can you make sure that the form we render has a `method` attribute set to 'get'?
  });

  it('should render a login form with a custom submit handler', async () => {
    // We'll do this one later. Don't worry about it for now.
    // If it *is* later, then you should worry about it.
    // Can you make sure that the form we render has a submit handler that calls a custom function?
  });
});
