// src/components/Curriculum.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Curriculum } from './curriculum';

describe('Curriculum', () => {
  const user = userEvent.setup();

  it('renders the main title', () => {
    render(<Curriculum />);
    expect(screen.getByRole('heading', { name: /O que vou aprender neste manual?/i })).toBeInTheDocument();
  });

  it('renders all technology sections collapsed initially', () => {
    render(<Curriculum />);
    expect(screen.getByRole('button', { name: /HTML/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CSS/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /JavaScript \(JS\)/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /React/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Git/i })).toBeInTheDocument();

    // Check that module titles are NOT visible initially
    expect(screen.queryByText(/1\. Introdução ao HTML/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/4\. Introdução ao CSS/i)).not.toBeInTheDocument();
  });

  it('expands a technology section on click', async () => {
    render(<Curriculum />);
    const htmlButton = screen.getByRole('button', { name: /HTML/i });

    expect(screen.queryByText(/1\. Introdução ao HTML/i)).not.toBeInTheDocument(); // Module title hidden

    await user.click(htmlButton);

    expect(screen.getByText(/1\. Introdução ao HTML/i)).toBeInTheDocument(); // Module title visible
    expect(screen.getByText(/2\. Aprofundando/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. Listas/i)).toBeInTheDocument();

    // Check that topics are still hidden
    expect(screen.queryByText(/Primeiro contato com tags/i)).not.toBeInTheDocument();
  });

  it('collapses a technology section on clicking again', async () => {
    render(<Curriculum />);
    const htmlButton = screen.getByRole('button', { name: /HTML/i });

    // Expand first
    await user.click(htmlButton);
    expect(screen.getByText(/1\. Introdução ao HTML/i)).toBeInTheDocument();

    // Collapse
    await user.click(htmlButton);
    expect(screen.queryByText(/1\. Introdução ao HTML/i)).not.toBeInTheDocument();
  });

  it('expands a module within an expanded technology section', async () => {
    render(<Curriculum />);
    const htmlButton = screen.getByRole('button', { name: /HTML/i });
    await user.click(htmlButton); // Expand HTML

    const module1Button = screen.getByRole('button', { name: /1\. Introdução ao HTML/i });
    expect(screen.queryByText(/Primeiro contato com tags/i)).not.toBeInTheDocument(); // Topic hidden

    await user.click(module1Button);

    expect(screen.getByText(/Primeiro contato com tags/i)).toBeInTheDocument(); // Topic visible
    expect(screen.getByText(/Tags semânticas/i)).toBeInTheDocument();
  });

  it('collapses a module on clicking again', async () => {
    render(<Curriculum />);
    const htmlButton = screen.getByRole('button', { name: /HTML/i });
    await user.click(htmlButton); // Expand HTML

    const module1Button = screen.getByRole('button', { name: /1\. Introdução ao HTML/i });
    await user.click(module1Button); // Expand Module 1
    expect(screen.getByText(/Primeiro contato com tags/i)).toBeInTheDocument();

    await user.click(module1Button); // Collapse Module 1
    expect(screen.queryByText(/Primeiro contato com tags/i)).not.toBeInTheDocument();
  });

   it('keeps other technology sections collapsed when one is expanded', async () => {
    render(<Curriculum />);
    const htmlButton = screen.getByRole('button', { name: /HTML/i });
    await user.click(htmlButton);

    expect(screen.getByText(/1\. Introdução ao HTML/i)).toBeInTheDocument();
    // Check that CSS module is still hidden
    expect(screen.queryByText(/4\. Introdução ao CSS/i)).not.toBeInTheDocument();
   });

    it('expands and collapses different sections independently', async () => {
        render(<Curriculum />);
        const htmlButton = screen.getByRole('button', { name: /HTML/i });
        const cssButton = screen.getByRole('button', { name: /CSS/i });

        // Expand HTML
        await user.click(htmlButton);
        expect(screen.getByText(/1\. Introdução ao HTML/i)).toBeInTheDocument();
        expect(screen.queryByText(/4\. Introdução ao CSS/i)).not.toBeInTheDocument();

        // Expand CSS
        await user.click(cssButton);
        expect(screen.getByText(/1\. Introdução ao HTML/i)).toBeInTheDocument(); // HTML should remain open
        expect(screen.getByText(/4\. Introdução ao CSS/i)).toBeInTheDocument(); // CSS now open

        // Collapse HTML
        await user.click(htmlButton);
        expect(screen.queryByText(/1\. Introdução ao HTML/i)).not.toBeInTheDocument(); // HTML now closed
        expect(screen.getByText(/4\. Introdução ao CSS/i)).toBeInTheDocument(); // CSS remains open
    });
});