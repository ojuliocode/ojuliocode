// lib/utils.test.ts
import { describe, it, expect } from 'vitest';
import { cn } from './utils'; // Assuming utils.ts is directly in lib

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const hasError = false;
    expect(cn('base', isActive && 'active', hasError && 'error')).toBe('base active');
  });

  it('should handle object notation', () => {
    expect(cn({ 'bg-blue-500': true, 'text-yellow-300': false }, 'p-4')).toBe('bg-blue-500 p-4');
  });

  it('should handle arrays', () => {
    expect(cn(['p-2', 'm-1'], ['rounded', 'shadow'])).toBe('p-2 m-1 rounded shadow');
  });

  it('should remove falsy values', () => {
    expect(cn('base', null, undefined, false, '', 'extra')).toBe('base extra');
  });

  it('should merge conflicting classes using tailwind-merge', () => {
    // twMerge handles conflicts like padding/margin/bg etc.
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
    expect(cn('px-4 py-2', 'p-3')).toBe('p-3'); // p-3 overrides px-4 and py-2
  });
});