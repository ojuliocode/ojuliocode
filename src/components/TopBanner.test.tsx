// src/components/TopBanner.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { TopBanner } from './top-banner';

describe('TopBanner', () => {
  it('renders the banner text initially', () => {
    render(<TopBanner />);
    expect(screen.getByText('Esta página foi criada usando ensinamentos do Magic Front')).toBeInTheDocument();
  });

  it('renders the close button', () => {
    render(<TopBanner />);
    // Use title or aria-label if the button has one, otherwise query by role and check content
    // Assuming the <X> icon renders as an SVG, targeting the button role is best
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('hides the banner when the close button is clicked', async () => {
    const user = userEvent.setup();
    render(<TopBanner />);

    const bannerText = screen.getByText('Esta página foi criada usando ensinamentos do Magic Front');
    const closeButton = screen.getByRole('button');

    expect(bannerText).toBeInTheDocument(); // Initially visible

    await user.click(closeButton);

    // After clicking, the component should return null, so the text is gone
    expect(screen.queryByText('Esta página foi criada usando ensinamentos do Magic Front')).not.toBeInTheDocument();
  });
});