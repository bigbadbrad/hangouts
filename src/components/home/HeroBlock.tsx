'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { ClaimUsernameModal } from './ClaimUsernameModal';

export const HeroBlock: FC = () => {
  const [claimModalOpen, setClaimModalOpen] = useState(false);
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '85vh', md: '95vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // Base: deep charcoal + midnight plum
        background: `
          radial-gradient(ellipse 120% 80% at 50% 120%, rgba(88, 72, 120, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 50% 100%, rgba(60, 55, 90, 0.2) 0%, transparent 45%),
          radial-gradient(ellipse 100% 60% at 30% 80%, rgba(45, 50, 75, 0.12) 0%, transparent 40%),
          radial-gradient(ellipse 80% 40% at 70% 90%, rgba(55, 50, 80, 0.1) 0%, transparent 35%),
          linear-gradient(180deg, #0f0f11 0%, #16161a 40%, #1a1820 100%)
        `,
      }}
    >
      {/* Vertical light beams - very subtle */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, transparent 0%, rgba(120, 115, 155, 0.03) 20%, transparent 40%),
            linear-gradient(95deg, transparent 30%, rgba(100, 110, 150, 0.02) 35%, transparent 40%),
            linear-gradient(85deg, transparent 60%, rgba(110, 100, 140, 0.02) 65%, transparent 70%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Soft bloom from lower center */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140%',
          height: '70%',
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(90, 85, 130, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient haze layer */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(70, 65, 95, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating particles - very subtle */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: 2,
            height: 2,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            animation: 'float-particle 18s ease-in-out infinite',
          },
          '&::before': {
            left: '20%',
            top: '60%',
            animationDelay: '0s',
          },
          '&::after': {
            left: '75%',
            top: '40%',
            width: 1.5,
            height: 1.5,
            animationDelay: '-6s',
            animationDuration: '22s',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '45%',
          top: '70%',
          width: 1,
          height: 1,
          borderRadius: '50%',
          backgroundColor: 'rgba(200, 195, 220, 0.08)',
          animation: 'float-particle 20s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '60%',
          top: '30%',
          width: 1.5,
          height: 1.5,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          animation: 'float-particle 25s ease-in-out infinite',
          animationDelay: '-3s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '30%',
          top: '50%',
          width: 1,
          height: 1,
          borderRadius: '50%',
          backgroundColor: 'rgba(180, 175, 210, 0.07)',
          animation: 'float-particle 16s ease-in-out infinite',
          animationDelay: '-12s',
        }}
      />

      {/* Keyframes for particles */}
      <Box
        component="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float-particle {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
              25% { transform: translate(8px, -15px) scale(1.1); opacity: 0.5; }
              50% { transform: translate(-5px, -25px) scale(0.9); opacity: 0.9; }
              75% { transform: translate(12px, -10px) scale(1); opacity: 0.6; }
            }
          `,
        }}
      />

      {/* Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto' }}>
          <Typography
            component="p"
            sx={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              mb: 2,
            }}
          >
            3D Chat, Reimagined
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.25rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              mb: 3,
              textShadow: '0 0 60px rgba(0,0,0,0.3)',
            }}
          >
            Hang out in worlds that come alive.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.65,
              mb: 4,
              maxWidth: 520,
              mx: 'auto',
            }}
          >
            Step into rooms where people meet, talk live, explore together, and spend time in spaces that react to the mood and move with the vibe.
          </Typography>
          {/* add google analytics */}

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
                color: '#0f0f11',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                '&:hover': {
                  backgroundColor: '#e8e8ea',
                  boxShadow: '0 6px 32px rgba(0,0,0,0.25)',
                },
              }}
            >
              Start a Hangout
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.35)',
                color: '#FFFFFF',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
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
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
                fontSize: '0.875rem',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            />
            <Chip
              label="Live 3D chat"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
                fontSize: '0.875rem',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            />
            <Chip
              label="Worlds that react"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
                fontSize: '0.875rem',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            />
          </Box>

          <Typography
            component="button"
            type="button"
            onClick={() => setClaimModalOpen(true)}
            sx={{
              display: 'block',
              mt: 10,
              mx: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              font: 'inherit',
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              '&:hover': {
                color: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            Claim your username before beta opens
          </Typography>
        </Box>
      </Container>

      <ClaimUsernameModal open={claimModalOpen} onClose={() => setClaimModalOpen(false)} />
    </Box>
  );
};
