'use client';

// Suppress React 19 ref warnings from MUI v5 (harmless; upgrade to MUI v6 for full support)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Accessing element.ref was removed in React 19')) {
      return;
    }
    originalError.apply(console, args);
  };
}

import type { FC } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Logo } from '@/components/logo';

export const MainNavbar: FC = () => {
  const colorScheme: 'dark' | 'light' = 'dark';

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: colorScheme === 'dark' ? '#1d1d1f' : '#fafafc',
        color: colorScheme === 'dark' ? 'text.secondary' : 'text.primary',
        borderTop: colorScheme === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.24)'
          : '1px solid rgba(0, 0, 0, 0.12)',
        borderBottom: colorScheme === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.24)'
          : '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100%',
          px: 2,
          display: 'grid',
          gridTemplateColumns: { xs: 'auto 1fr auto', sm: '1fr auto 1fr' },
          alignItems: 'center',
          minHeight: { xs: 64, sm: 72 },
        }}
      >
        {/* LEFT spacer (reserved for future nav) */}
        <Box sx={{ gridColumn: { xs: '1 / 2', sm: '1 / 2' } }} />

        {/* CENTER — logo (smaller on mobile) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: { xs: '2 / 3', sm: '2 / 3' },
            height: { xs: 14, sm: 18 },
            pt: 1,
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: '350px',
              margin: '0 auto',
              height: '100%',
              textDecoration: 'none',
            }}
          >
            <Logo textColor="#FFFFFF" height={50} />
          </Link>
        </Box>

        {/* RIGHT — empty (hamburger removed) */}
        <Box sx={{ gridColumn: { xs: '3 / 4', sm: '3 / 4' } }} />
      </Toolbar>
    </AppBar>
  );
};
