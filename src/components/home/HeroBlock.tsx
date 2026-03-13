'use client';

import type { FC } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';

export const HeroBlock: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1d1d1f',
        minHeight: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Private 3D Chat
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: '#a1a1a6',
              lineHeight: 1.4,
              mb: 3,
            }}
          >
            3D chat for real hangouts
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: '#d1d1d2',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Step into private rooms with friends, talk live, explore together, and hang out in worlds that react to your vibe and come alive around you.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#1d1d1f',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#e5e5e7',
                },
              }}
            >
              Start a Hangout
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#FFFFFF',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.6)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              Watch Demo
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
            }}
          >
            <Chip
              label="Private rooms"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#d1d1d2',
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            />
            <Chip
              label="Live 3D chat"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#d1d1d2',
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            />
            <Chip
              label="Worlds that react"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#d1d1d2',
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
