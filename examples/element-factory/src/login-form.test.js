import { screen } from '@testing-library/dom';
import { createLoginForm } from './login-form';

describe('LoginForm', async () => {
  it('should render a login form', async () => {
    document.body.replaceChildren(createLoginForm());

    const form = screen.getByRole('form', { name: /login/i });

    expect(form).toBeInTheDocument();
  });

  it('should render a login form with a custom action', async () => {
    document.body.replaceChildren(createLoginForm({ action: '/custom' }));

    const form = screen.getByRole('form', { name: /login/i });

    expect(form).toHaveAttribute('action', '/custom');
  });

  it('should render a login form with a custom method', async () => {
    document.body.replaceChildren(createLoginForm({ method: 'get' }));

    const form = screen.getByRole('form', { name: /login/i });

    expect(form).toHaveAttribute('method', 'get');
  });
});
