// src/components/Testimonials.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Testimonials } from './testimonials';

// Mock the testimonials array if needed, or use the one imported
// For simplicity, we assume the component imports the actual array
const testimonialsContent = [
  "Terminei de estudar o ebook hoje, e posso te falar que é o melhor conteúdo de programação a esse preço!!",
  "Parabéns pelo trabalho com o youtube e o conteúdo 👏👏",
  "Parabéns pelo conteúdo, muito bom",
  "Um dos melhores conteúdos de programação aqui no insta ❤️",
  "Eai brother. Queria te passar o feedback sobre o seu livro. Muito bom, explicação clara e completa",
  "Comprei há um tempo e comecei a estudar agora. Parabéns pela clareza nas explicações. Muito sucesso você vai longe 👍 👍",
  "Nunca vi alguém com um conteúdo tão completo com esse preço. Com certeza está ajudando muita gente",
  "Gostei muito do ebook. Está me ajudando muito.",
];

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { name: /Mensagens que recebo no Instagram/i })).toBeInTheDocument();
  });

  it('renders the first testimonial initially', () => {
    render(<Testimonials />);
    expect(screen.getByText(`"${testimonialsContent[0]}"`)).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Testimonials />);
    // Using aria-label or title would be better if added to buttons
    // Otherwise, find by role and potentially content/icon if distinguishable
    const buttons = screen.getAllByRole('button');
    // Expecting 2 navigation buttons (prev/next)
    expect(buttons.length).toBeGreaterThanOrEqual(2);
    // Check for presence of icons if possible (e.g., via class or rendered SVG structure)
  });

  it('navigates to the next testimonial on next button click', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    expect(screen.getByText(`"${testimonialsContent[0]}"`)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons.find(btn => btn.querySelector('svg.lucide-chevron-right')); // Find based on icon
    expect(nextButton).toBeDefined();

    await user.click(nextButton!);

    expect(screen.getByText(`"${testimonialsContent[1]}"`)).toBeInTheDocument();
    expect(screen.queryByText(`"${testimonialsContent[0]}"`)).not.toBeInTheDocument();
  });

  it('navigates to the previous testimonial on previous button click', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    // Go to the second testimonial first
    const buttons = screen.getAllByRole('button');
    const nextButton = buttons.find(btn => btn.querySelector('svg.lucide-chevron-right'));
    await user.click(nextButton!);
    expect(screen.getByText(`"${testimonialsContent[1]}"`)).toBeInTheDocument();

    // Now click previous
    const prevButton = buttons.find(btn => btn.querySelector('svg.lucide-chevron-left'));
     expect(prevButton).toBeDefined();
    await user.click(prevButton!);

    expect(screen.getByText(`"${testimonialsContent[0]}"`)).toBeInTheDocument();
    expect(screen.queryByText(`"${testimonialsContent[1]}"`)).not.toBeInTheDocument();
  });

  it('wraps around to the last testimonial when clicking previous on the first item', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    expect(screen.getByText(`"${testimonialsContent[0]}"`)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons.find(btn => btn.querySelector('svg.lucide-chevron-left'));
    expect(prevButton).toBeDefined();

    await user.click(prevButton!);

    // Should now show the last testimonial
    const lastIndex = testimonialsContent.length - 1;
    expect(screen.getByText(`"${testimonialsContent[lastIndex]}"`)).toBeInTheDocument();
    expect(screen.queryByText(`"${testimonialsContent[0]}"`)).not.toBeInTheDocument();
  });

  it('wraps around to the first testimonial when clicking next on the last item', async () => {
     const user = userEvent.setup();
     render(<Testimonials />);
     const buttons = screen.getAllByRole('button');
     const nextButton = buttons.find(btn => btn.querySelector('svg.lucide-chevron-right'));
     expect(nextButton).toBeDefined();

     // Click next until we are at the last item
     for (let i = 0; i < testimonialsContent.length - 1; i++) {
       await user.click(nextButton!);
     }

     const lastIndex = testimonialsContent.length - 1;
     expect(screen.getByText(`"${testimonialsContent[lastIndex]}"`)).toBeInTheDocument();

     // Click next one more time
     await user.click(nextButton!);

     // Should wrap around to the first item
     expect(screen.getByText(`"${testimonialsContent[0]}"`)).toBeInTheDocument();
     expect(screen.queryByText(`"${testimonialsContent[lastIndex]}"`)).not.toBeInTheDocument();
  });

  it('updates indicator dots correctly', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    // Find the container for the dots (might need a test-id or specific selector)
    // Assuming dots are divs and the active one has 'bg-sky-500'
    let dots = screen.getAllByRole('generic', { name: '' }).filter(el => el.className.includes('w-2 h-2 rounded-full')); // A bit fragile selector
    expect(dots).toHaveLength(testimonialsContent.length);
    expect(dots[0]).toHaveClass('bg-sky-500');
    expect(dots[1]).toHaveClass('bg-gray-300');

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons.find(btn => btn.querySelector('svg.lucide-chevron-right'));
    await user.click(nextButton!);

    // Re-query dots after state update
    dots = screen.getAllByRole('generic', { name: '' }).filter(el => el.className.includes('w-2 h-2 rounded-full'));
    expect(dots[0]).toHaveClass('bg-gray-300');
    expect(dots[1]).toHaveClass('bg-sky-500');
  });
});