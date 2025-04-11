// src/components/CTAButton.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CTAButton } from './cta-button'; // Adjust path

describe('CTAButton', () => {
  const defaultProps = {
    text: 'Click Me',
    href: 'https://example.com',
  };

  it('renders the button with correct text and href', () => {
    render(<CTAButton {...defaultProps} />);
    const linkElement = screen.getByRole('link', { name: defaultProps.text });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', defaultProps.href);
    expect(linkElement).toHaveTextContent(defaultProps.text);
  });

  it('applies primary styles when primary prop is true', () => {
    render(<CTAButton {...defaultProps} primary />);
    const linkElement = screen.getByRole('link', { name: defaultProps.text });
    // Check for classes indicative of primary style (adjust based on your actual implementation)
    expect(linkElement).toHaveClass(/bg-sky-500/); // Check for primary background
    expect(linkElement).toHaveClass(/text-white/); // Check for primary text color
    expect(linkElement).not.toHaveClass(/border-sky-300/); // Should not have border class
    // Check for shimmer elements if needed (might be implementation detail)
    // expect(linkElement.querySelector('.group-hover\\:animate-shimmer')).toBeInTheDocument();
  });

  it('applies secondary styles when primary prop is false or omitted', () => {
    render(<CTAButton {...defaultProps} />);
    const linkElement = screen.getByRole('link', { name: defaultProps.text });
    // Check for classes indicative of secondary style
    expect(linkElement).toHaveClass(/border-sky-300/); // Check for border
    expect(linkElement).toHaveClass(/text-gray-700/); // Check for secondary text color
    expect(linkElement).not.toHaveClass(/bg-sky-500/); // Should not have primary background
  });

   it('applies large styles when large prop is true', () => {
    render(<CTAButton {...defaultProps} large />);
    const linkElement = screen.getByRole('link', { name: defaultProps.text });
    // Check for classes indicative of large size (e.g., px-8, py-4, text-lg)
    // UsingtoContain because other classes might be present
    expect(linkElement.className).toContain('px-8');
    expect(linkElement.className).toContain('py-4');
    expect(linkElement.className).toContain('text-lg');
   });

   it('does not apply large styles when large prop is false or omitted', () => {
    render(<CTAButton {...defaultProps} />);
    const linkElement = screen.getByRole('link', { name: defaultProps.text });
    // Check that large classes are NOT present
    expect(linkElement.className).not.toContain('px-8');
    expect(linkElement.className).not.toContain('py-4');
    expect(linkElement.className).not.toContain('text-lg');
   });
});