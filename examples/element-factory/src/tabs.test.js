import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Tabs from './tabs.svelte';

describe.todo('Tabs', () => {
  beforeEach(() => {
    render(Tabs, {
      tabs: [
        { label: 'Venue', content: 'We will be at this place!' },
        { label: 'Lineup', content: 'Check out our exciting lineup!' },
        { label: 'Tickets', content: 'Buy tickets today!' },
      ],
    });
  });

  it('should render three tabs', async () => {});

  it('should switch tabs', async () => {});

  it('should render the content of the selected tab', async () => {});

  it('should render the content of the first tab by default', async () => {});
});
