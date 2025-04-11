// src/setupTests.ts
import '@testing-library/jest-dom/vitest'; // Extends expect with jest-dom matchers
import { vi } from 'vitest';

// Mock matchMedia for components/hooks that use it (like useMobile)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false, // Default value
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated but sometimes used
    removeListener: vi.fn(), // Deprecated but sometimes used
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock window.innerWidth for useMobile
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024, // Default to desktop width
});

// Mock scrollY for StickyBanner logic (if needed directly in tests)
Object.defineProperty(window, 'scrollY', {
  writable: true,
  configurable: true,
  value: 0,
});

// You might need to mock other browser APIs if your components use them
// Example: IntersectionObserver
// const IntersectionObserverMock = vi.fn(() => ({
//   disconnect: vi.fn(),
//   observe: vi.fn(),
//   takeRecords: vi.fn(),
//   unobserve: vi.fn(),
// }));
// vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// Clean up mocks after each test
// afterEach(() => {
//   vi.clearAllMocks();
// });