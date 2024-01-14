'use client';

import { ApolloProvider } from './ApolloProvider';
import { registerMockServiceWorker } from './registerMockServiceWorker';
import { ThemeProvider } from './ThemeProvider';
import { useMemo } from 'react';

export interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  useMemo(() => {
    registerMockServiceWorker();
  }, []);

  return (
    <ThemeProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </ThemeProvider>
  );
}
