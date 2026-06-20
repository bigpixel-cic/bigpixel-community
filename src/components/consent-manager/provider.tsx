'use client';

import dynamic from 'next/dynamic';
import { ConsentDialog, ConsentManagerProvider, ConsentBanner } from '@c15t/nextjs';
import type { ConsentManagerProps } from '@c15t/nextjs';
import { theme } from './theme';
import { gtag } from '@c15t/scripts/google-tag';

const DevTools =
  process.env.NODE_ENV !== 'production'
    ? dynamic(() => import('@c15t/dev-tools/react').then((m) => m.DevTools), { ssr: false })
    : null;

export default function ConsentManagerClient({ children, ssrData }: ConsentManagerProps) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'hosted',
        backendURL: '/api/c15t',
        ssrData,
        theme,
        scripts: [
          gtag({
            id: 'G-P498WYCBW4',
            category: 'measurement',
            script: { fetchPriority: 'low' },
          }),
        ],
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      {DevTools && <DevTools />}
      {children}
    </ConsentManagerProvider>
  );
}
