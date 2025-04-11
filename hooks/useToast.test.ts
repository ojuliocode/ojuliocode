// hooks/useToast.test.ts
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { reducer, toast, useToast, Action } from './use-toast'; // Adjust path
import { act, renderHook } from '@testing-library/react';

// Reset the state before each test if needed (depends on how you manage memoryState)
// This is tricky because state is module-level. A better approach might involve
// exporting a reset function or refactoring state management.
// For simplicity, we'll test the reducer purely and the hook's interactions.

describe('useToast reducer', () => {
  let initialState: { toasts: any[] };

  beforeEach(() => {
    initialState = { toasts: [] };
  });

  it('should add a toast', () => {
    const newToast = { id: '1', title: 'Test', open: true };
    const state = reducer(initialState, { type: 'ADD_TOAST', toast: newToast });
    expect(state.toasts).toHaveLength(1);
    expect(state.toasts[0]).toEqual(newToast);
  });

  it('should limit toasts to TOAST_LIMIT (1)', () => {
     const toast1 = { id: '1', title: 'Toast 1', open: true };
     const toast2 = { id: '2', title: 'Toast 2', open: true };
     let state = reducer(initialState, { type: 'ADD_TOAST', toast: toast1 });
     state = reducer(state, { type: 'ADD_TOAST', toast: toast2 });
     expect(state.toasts).toHaveLength(1);
     expect(state.toasts[0].id).toBe('2'); // Most recent one stays
  });

  it('should update a toast', () => {
    const initialToast = { id: '1', title: 'Initial', open: true };
    const stateWithToast = { toasts: [initialToast] };
    const updatedToast = { id: '1', title: 'Updated', description: 'New Desc' };
    const state = reducer(stateWithToast, { type: 'UPDATE_TOAST', toast: updatedToast });
    expect(state.toasts[0].title).toBe('Updated');
    expect(state.toasts[0].description).toBe('New Desc');
    expect(state.toasts[0].open).toBe(true); // Other props remain
  });

   it('should dismiss a specific toast (set open to false)', () => {
    vi.useFakeTimers(); // Use fake timers for addToRemoveQueue
    const toast1 = { id: '1', title: 'Toast 1', open: true };
    const toast2 = { id: '2', title: 'Toast 2', open: true };
    const stateWithToasts = { toasts: [toast1, toast2] };
    const state = reducer(stateWithToasts, { type: 'DISMISS_TOAST', toastId: '1' });
    expect(state.toasts[0].open).toBe(false);
    expect(state.toasts[1].open).toBe(true);
    // Check if it was added to remove queue (mock setTimeout or spy)
    vi.advanceTimersByTime(1000000); // Advance past TOAST_REMOVE_DELAY
    // Note: Testing the REMOVE_TOAST dispatch requires spying on dispatch or testing the hook directly
    vi.useRealTimers();
   });

   it('should dismiss all toasts', () => {
    vi.useFakeTimers();
    const toast1 = { id: '1', title: 'Toast 1', open: true };
    const toast2 = { id: '2', title: 'Toast 2', open: true };
    const stateWithToasts = { toasts: [toast1, toast2] };
    const state = reducer(stateWithToasts, { type: 'DISMISS_TOAST' }); // No toastId
    expect(state.toasts[0].open).toBe(false);
    expect(state.toasts[1].open).toBe(false);
    vi.useRealTimers();
   });

   it('should remove a specific toast', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: false }; // Assume dismissed
      const toast2 = { id: '2', title: 'Toast 2', open: true };
      const stateWithToasts = { toasts: [toast1, toast2] };
      const state = reducer(stateWithToasts, { type: 'REMOVE_TOAST', toastId: '1' });
      expect(state.toasts).toHaveLength(1);
      expect(state.toasts[0].id).toBe('2');
   });

   it('should remove all toasts', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: false };
      const toast2 = { id: '2', title: 'Toast 2', open: true };
      const stateWithToasts = { toasts: [toast1, toast2] };
      const state = reducer(stateWithToasts, { type: 'REMOVE_TOAST' }); // No toastId
      expect(state.toasts).toHaveLength(0);
   });
});

describe('useToast hook and toast function', () => {
    // Need to reset module state between tests - this is complex.
    // A simpler test focuses on interaction within one test run.
    // Consider refactoring `useToast` for better testability if needed.

    beforeEach(() => {
      // Attempt to reset the module state (might not be fully effective depending on imports)
      vi.resetModules();
      // Re-importing might get fresh state if modules are truly isolated by vi.resetModules()
      // const { toast: freshToast, useToast: freshUseToast } = await import('./use-toast');
      // toast = freshToast;
      // useToast = freshUseToast;
      // This is often problematic. Let's proceed cautiously.
    });

    it('should add a toast via the toast function and reflect in the hook', () => {
        const { result } = renderHook(() => useToast());
        expect(result.current.toasts).toHaveLength(0);

        act(() => {
            toast({ title: 'Hello' });
        });

        // State might not update immediately if dispatch is async or relies on listeners
        // Re-rendering might be needed or checking listener calls
        expect(result.current.toasts).toHaveLength(1);
        expect(result.current.toasts[0].title).toBe('Hello');
        expect(result.current.toasts[0].open).toBe(true);
    });

     it('should dismiss a toast using the hook dismiss function', () => {
        vi.useFakeTimers();
        const { result } = renderHook(() => useToast());
        let toastId: string | undefined;

        act(() => {
          const { id } = toast({ title: 'To Dismiss' });
          toastId = id;
        });

        expect(result.current.toasts).toHaveLength(1);
        expect(result.current.toasts[0].open).toBe(true);


        act(() => {
          result.current.dismiss(toastId);
        });

        expect(result.current.toasts[0].open).toBe(false);

        // Test removal after delay
        act(() => {
           vi.advanceTimersByTime(1000000); // TOAST_REMOVE_DELAY
        });
        // The state update from REMOVE_TOAST might require another act/re-render
        // or checking the listener logic more directly.
        // This demonstrates the complexity of testing module-level state.
        // For now, we check the dismiss action correctly sets 'open' to false.

        vi.useRealTimers();
     });

      it('should dismiss a toast using the returned dismiss function', () => {
        vi.useFakeTimers();
        const { result } = renderHook(() => useToast());
        let dismissFn: (() => void) | undefined;

        act(() => {
          const { dismiss } = toast({ title: 'To Dismiss Direct' });
          dismissFn = dismiss;
        });

        expect(result.current.toasts).toHaveLength(1);
        expect(result.current.toasts[0].open).toBe(true);

        act(() => {
          dismissFn?.();
        });

         expect(result.current.toasts[0].open).toBe(false);
        vi.useRealTimers();
      });

       it('should update a toast using the returned update function', () => {
        const { result } = renderHook(() => useToast());
        let updateFn: ((props: any) => void) | undefined;

        act(() => {
          const { update } = toast({ title: 'Initial Title' });
          updateFn = update;
        });

        expect(result.current.toasts[0].title).toBe('Initial Title');

        act(() => {
          updateFn?.({ title: 'Updated Title' });
        });

        expect(result.current.toasts[0].title).toBe('Updated Title');
      });
});