import type { SetupWorker } from 'msw/browser';

export function registerMockServiceWorker() {
  if (typeof window === 'object') {
    const { worker } = require('@/mocks/browser') as {
      worker: SetupWorker;
    };
    void worker.start({ onUnhandledRequest: 'bypass' });
  }
}
