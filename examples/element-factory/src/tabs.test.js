import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Tabs from './tabs.svelte';

describe('Tabs', () => {
  beforeEach(() => {
    render(Tabs, {
      tabs: [
        { label: 'Venue', content: 'We will be at this place!' },
        { label: 'Lineup', content: 'Check out our exciting lineup!' },
        { label: 'Tickets', content: 'Buy tickets today!' },
      ],
    });
  });

  it('should render three tabs', async () => {
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(3);
  });

  it('should switch tabs', async () => {
    const tabs = screen.getAllByRole('tab');
    const secondTab = tabs[1];

    await userEvent.click(secondTab);

    expect(secondTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should render the content of the selected tab', async () => {
    const tabs = screen.getAllByRole('tab');
    const secondTab = tabs[1];

    await userEvent.click(secondTab);

    const content = screen.getByRole('tabpanel', { hidden: false });
    expect(content).toHaveTextContent('lineup');
  });

  it('should render the content of the first tab by default', async () => {
    const content = screen.getByRole('tabpanel', { hidden: false });
    expect(content).toHaveTextContent('We will be at this place!');
  });
});
