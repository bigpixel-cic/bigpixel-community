import type { ReactNode } from 'react';
import ConsentManagerProvider from './provider';

/**
 * Server-side consent management wrapper with SSR data prefetching.
 * @see https://c15t.com/docs/frameworks/nextjs/quickstart
 */
export function ConsentManager({ children }: { children: ReactNode }) {
  return <ConsentManagerProvider>{children}</ConsentManagerProvider>;
}
