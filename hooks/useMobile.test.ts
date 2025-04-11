// hooks/useMobile.test.tsx
import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './use-mobile'; // Adjust path if necessary
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Helper to trigger resize/change event
const triggerResize = (width: number) => {
  act(() => {
    window.innerWidth = width;
    // Find the mock addEventListener was called with and trigger its callback
    const matchMediaMock = window.matchMedia as vi.Mock;
    const mqlInstance = matchMediaMock.mock.results[0]?.value; // Get the instance created by the hook
    if (mqlInstance && mqlInstance.addEventListener.mock.calls.length > 0) {
      const changeCallback = mqlInstance.addEventListener.mock.calls.find(
        (call: any) => call[0] === 'change'
      )?.[1];
      if (changeCallback) {
         changeCallback({ matches: width < 768 });
      }
    } else {
      // Fallback if addEventListener wasn't captured properly, directly call onChange logic
       console.warn("Could not find change listener, manually triggering re-render might be needed or check mock setup");
       // In a real component test, you'd likely force a re-render here if needed
    }
  });
};


describe('useIsMobile hook', () => {
  let matchMediaMock: vi.Mock;
  let mqlInstance: {
      matches: boolean;
      media: string;
      addEventListener: vi.Mock;
      removeEventListener: vi.Mock;
  };

  beforeEach(() => {
    // Reset mocks for each test
    mqlInstance = {
        matches: false,
        media: '',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
    };
    matchMediaMock = vi.fn().mockImplementation(query => {
        mqlInstance.media = query;
        // Update matches based on initial innerWidth during mock creation
        mqlInstance.matches = window.innerWidth < 768;
        return mqlInstance;
    });
    vi.stubGlobal('matchMedia', matchMediaMock);
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore original implementations
  });

  it('should return false on desktop width initially', () => {
    window.innerWidth = 1024; // Setup width before rendering hook
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
    expect(matchMediaMock).toHaveBeenCalledWith('(max-width: 767px)');
    expect(mqlInstance.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });

  it('should return true on mobile width initially', () => {
    window.innerWidth = 500; // Setup width before rendering hook
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
    expect(matchMediaMock).toHaveBeenCalledWith('(max-width: 767px)');
    expect(mqlInstance.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });

  it('should update when window is resized to mobile', () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false); // Initial desktop

    // Simulate resize to mobile
     act(() => {
       window.innerWidth = 600;
       const changeCallback = mqlInstance.addEventListener.mock.calls[0][1];
       changeCallback(); // Trigger the callback passed to addEventListener
     });

    expect(result.current).toBe(true);
  });

   it('should update when window is resized to desktop', () => {
    window.innerWidth = 600;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true); // Initial mobile

    // Simulate resize to desktop
    act(() => {
       window.innerWidth = 1000;
       const changeCallback = mqlInstance.addEventListener.mock.calls[0][1];
       changeCallback(); // Trigger the callback passed to addEventListener
     });

    expect(result.current).toBe(false);
   });


  it('should clean up event listener on unmount', () => {
    const { unmount } = renderHook(() => useIsMobile());
    expect(mqlInstance.addEventListener).toHaveBeenCalledTimes(1);

    unmount();
    expect(mqlInstance.removeEventListener).toHaveBeenCalledTimes(1);
    expect(mqlInstance.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });
});