import { screen, render } from '@testing-library/react';
import { User } from './user';

it.skip('should render a user', async () => {
  // This calls an API. That's not great. We should mock it.
  const id = 1;
  render(<User id={id} />);

  expect(user).toBeInTheDocument();
});
