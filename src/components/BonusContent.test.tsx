// src/components/BonusContent.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BonusContent } from './bonus-content';

describe('BonusContent', () => {
  const user = userEvent.setup();

  it('renders the main title and description', () => {
    render(<BonusContent />);
    expect(screen.getByRole('heading', { name: /Extra!/i })).toBeInTheDocument();
    expect(screen.getByText(/Conteúdo bônus para ajudar você a se destacar/i)).toBeInTheDocument();
  });

  it('renders bonus sections collapsed initially', () => {
    render(<BonusContent />);
    expect(screen.getByRole('button', { name: /1\. Montar um currículo/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /2\. Linkedin/i })).toBeInTheDocument();

    // Check topics are hidden
    expect(screen.queryByText(/Montando um currículo do zero/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Como interagir no linkedin/i)).not.toBeInTheDocument();
  });

  it('expands a bonus section on click', async () => {
    render(<BonusContent />);
    const curriculumButton = screen.getByRole('button', { name: /1\. Montar um currículo/i });

    expect(screen.queryByText(/Montando um currículo do zero/i)).not.toBeInTheDocument();

    await user.click(curriculumButton);

    expect(screen.getByText(/Montando um currículo do zero/i)).toBeInTheDocument();
    expect(screen.getByText(/O que as empresas querem/i)).toBeInTheDocument();
  });

  it('collapses a bonus section on clicking again', async () => {
    render(<BonusContent />);
    const curriculumButton = screen.getByRole('button', { name: /1\. Montar um currículo/i });

    // Expand
    await user.click(curriculumButton);
    expect(screen.getByText(/Montando um currículo do zero/i)).toBeInTheDocument();

    // Collapse
    await user.click(curriculumButton);
    expect(screen.queryByText(/Montando um currículo do zero/i)).not.toBeInTheDocument();
  });

   it('expands only the clicked bonus section', async () => {
    render(<BonusContent />);
    const curriculumButton = screen.getByRole('button', { name: /1\. Montar um currículo/i });
    const linkedinButton = screen.getByRole('button', { name: /2\. Linkedin/i });

    // Expand Curriculum
    await user.click(curriculumButton);
    expect(screen.getByText(/Montando um currículo do zero/i)).toBeInTheDocument();
    expect(screen.queryByText(/Como interagir no linkedin/i)).not.toBeInTheDocument(); // Linkedin topics hidden

    // Click Linkedin (should collapse Curriculum and expand Linkedin)
    await user.click(linkedinButton);
    expect(screen.queryByText(/Montando um currículo do zero/i)).not.toBeInTheDocument(); // Curriculum topics hidden
    expect(screen.getByText(/Como interagir no linkedin/i)).toBeInTheDocument(); // Linkedin topics visible
  });

  it('renders the final bonus box', () => {
     render(<BonusContent />);
     expect(screen.getByText(/Bônus exclusivos/i)).toBeInTheDocument();
     expect(screen.getByText(/Conteúdo adicional para impulsionar sua carreira/i)).toBeInTheDocument();
  });
});