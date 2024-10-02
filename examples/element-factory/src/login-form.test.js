import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createLoginForm } from './login-form';

describe('LoginForm', async () => {
  it('should render a login form', async () => {
    document.body.replaceChildren(createLoginForm());

    const form = screen.getByRole('form', { name: /login/i });

    expect(form).toBeInTheDocument();
  });

  it('should render a login form with a custom action', async () => {
    // Can you make sure that the form we render has an `action` attribute set to '/custom'?
    document.body.replaceChildren(createLoginForm({ action: '/custom' }));

    const form = screen.getByRole('form', { name: /login/i });

    expect(form).toHaveAttribute('action', '/custom');
  });

  it('should render a login form with a custom method', async () => {
    // Can you make sure that the form we render has a `method` attribute set to 'get'?
    document.body.replaceChildren(createLoginForm({ method: 'get' }));

    const form = screen.getByRole('form', { name: /login/i });

    expect(form).toHaveAttribute('method', 'get');
  });

  it('should render a login form with a custom submit handler', async () => {
    // We'll do this one later. Don't worry about it for now.
    // If it *is* later, then you should worry about it.
    // Can you make sure that the form we render has a submit handler that calls a custom function?
    const onSubmit = vi.fn();
    document.body.replaceChildren(createLoginForm({ onSubmit }));

    const form = screen.getByRole('form', { name: /login/i });
    const submitButton = screen.getByRole('button', { name: /login/i });

    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });
});
