'use client';

import { ConsentDialog, ConsentManagerProvider, ConsentBanner } from '@c15t/nextjs';
import type { ConsentManagerProps } from '@c15t/nextjs';
import { DevTools } from '@c15t/dev-tools/react';
import { theme } from './theme';
import { gtag } from '@c15t/scripts/google-tag';
/**
 * Client-side consent manager provider.
 * @see https://c15t.com/docs/frameworks/nextjs/quickstart
 */
export default function ConsentManagerClient({ children }: ConsentManagerProps) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'hosted',
        backendURL: '/api/c15t',
        theme,
        scripts: [
          gtag({
            id: 'G-P498WYCBW4',
            category: 'measurement',
          }),
        ],
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      {process.env.NODE_ENV === 'development' && <DevTools />}
      {children}
    </ConsentManagerProvider>
  );
}
