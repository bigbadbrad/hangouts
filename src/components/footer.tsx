// /components/footer.tsx
"use client";

import type { FC } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { IconCircle } from './icon-circle';
import { Logo } from './logo';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface FooterProps {
  colorScheme?: 'light' | 'dark';
}

export const Footer: FC<FooterProps> = ({ colorScheme = 'dark' }) => {
  const iconColor = colorScheme === 'dark' ? '#d1d1d2' : '#444444';

  return (
  <Box
    sx={{
      backgroundColor: colorScheme === 'dark' ? '#1d1d1f' : '#f3f3f6',
      textAlign: 'center',
      pt: 8,
      pb: 10,
      color: colorScheme === 'dark' ? '#d1d1d2' : '#444444',
    }}
  >
    <Container maxWidth="md">
    <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        {/* Main icon and logo */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ width: { xs: '15%', sm: '30%' } }}>
            <IconCircle fill={iconColor} />
          </Box>
          <Box sx={{ mt: -1, display: 'flex', justifyContent: 'center' }}>
            <Logo textColor={iconColor} height={34} />
          </Box>
        </Box>
        <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>3D chat that comes alive.</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button sx={{ color: iconColor, textTransform: 'none' }}>About</Button>
          <Button sx={{ color: iconColor, textTransform: 'none' }}>Privacy</Button>
          <Button sx={{ color: iconColor, textTransform: 'none' }}>Terms</Button>
          <Button sx={{ color: iconColor, textTransform: 'none' }}>Contact</Button>
        </Box>

        <Box
          sx={{
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <FacebookIcon
            sx={{
              color: colorScheme === 'dark' ? '#d1d1d2' : '#444444',
              fontSize: '3rem',
              mx: '0.4rem',
            }}
          />
          <InstagramIcon
            sx={{
              color: colorScheme === 'dark' ? '#d1d1d2' : '#444444',
              fontSize: '3rem',
              mx: '0.4rem',
            }}
          />
          <XIcon
            sx={{
              color: colorScheme === 'dark' ? '#d1d1d2' : '#444444',
              fontSize: '2.7rem',
              mx: '0.4rem',
            }}
          />
        </Box>

      <Typography
              variant="subtitle1"
              sx={{
                pt: 3,
                pb: 5,
              }}
            >
              © 2026 Hangouts<br />
              All Rights Reserved
            </Typography>
      </Box>
    </Container>
  </Box>
  );
};
