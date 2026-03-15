'use client';

import type { FC } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  User as UserIcon,
  House as HouseIcon,
  Cube as CubeIcon,
  CurrencyCircleDollar as EarnIcon,
} from '@phosphor-icons/react';

const supportingItems = [
  {
    title: 'Create avatar looks',
    body: 'Design styles, outfits, accessories, and identity items that help people show up as themselves.',
    Icon: UserIcon,
  },
  {
    title: 'Build rooms and decor',
    body: 'Shape the spaces people meet in, from signature rooms to scene details that define the mood.',
    Icon: HouseIcon,
  },
  {
    title: 'Publish interactive assets',
    body: 'Create objects and atmosphere elements that make hangouts feel more alive and memorable.',
    Icon: CubeIcon,
  },
  {
    title: 'Earn from what you build',
    body: 'Grow with the platform by publishing original creator-made content people actually use.',
    Icon: EarnIcon,
  },
];

export const CreatorProgramBlock: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: `
          radial-gradient(ellipse 100% 60% at 80% 50%, rgba(120, 90, 140, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 20% 60%, rgba(90, 70, 110, 0.08) 0%, transparent 45%),
          linear-gradient(180deg, #1d1d1f 0%, #1a1525 30%, #1e1a28 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 14 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: 600,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          opacity: 0.6,
        },
      }}
    >
      <Box
        component="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes creator-float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(2deg); }
            }
            @keyframes creator-float-2 {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(6px) rotate(-1deg); }
            }
            @keyframes creator-glow {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.7; }
            }
          `,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left: Copy + CTAs + supporting points */}
          <Box sx={{ order: { xs: 1, md: 1 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.6)',
                  mb: 1.5,
                }}
              >
                Creator Program
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Build the worlds, looks, and moments people come back for.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  color: '#a1a1a6',
                  lineHeight: 1.65,
                  mb: 3,
                }}
              >
                Create avatars, rooms, decor, and interactive scene assets for Hangouts — and turn your style into part of a new kind of 3D social experience.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2,
                  mb: 4,
                }}
              >
                {supportingItems.map((item) => (
                  <Box
                    key={item.title}
                    component="div"
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      gap: 1.5,
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid rgba(255,255,255,0.06)',
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                      '&:hover': {
                        borderColor: 'rgba(255,255,255,0.14)',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        zIndex: 1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                      }}
                    >
                      <item.Icon size={18} weight="duotone" color="rgba(255,255,255,0.9)" />
                    </Box>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                          mb: 0.25,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.8125rem',
                          color: '#a1a1a6',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
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
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#e8e8ea',
                    },
                  }}
                >
                  Join the Creator Program
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
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Right: Visual composition — floating asset cards */}
          <Box
            sx={{
              order: { xs: 2, md: 2 },
              position: 'relative',
              minHeight: { xs: 320, md: 400 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Ambient glow */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(140, 100, 180, 0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  animation: 'creator-glow 6s ease-in-out infinite',
                }}
              />

              {/* Floating asset cards — avatar, room, decor, asset */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '10%', md: '5%' },
                  top: { xs: '15%', md: '20%' },
                  width: 80,
                  height: 100,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'creator-float 5s ease-in-out infinite',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <UserIcon size={32} weight="duotone" color="rgba(255,255,255,0.6)" />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  right: { xs: '5%', md: '10%' },
                  top: { xs: '10%', md: '15%' },
                  width: 90,
                  height: 70,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'creator-float-2 6s ease-in-out infinite 0.5s',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <HouseIcon size={28} weight="duotone" color="rgba(255,255,255,0.6)" />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '5%', md: '15%' },
                  bottom: { xs: '25%', md: '20%' },
                  width: 70,
                  height: 85,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'creator-float 5.5s ease-in-out infinite 1s',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <CubeIcon size={26} weight="duotone" color="rgba(255,255,255,0.6)" />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  right: { xs: '15%', md: '5%' },
                  bottom: { xs: '15%', md: '25%' },
                  width: 85,
                  height: 90,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'creator-float-2 5s ease-in-out infinite 1.5s',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                }}
              >
                <EarnIcon size={30} weight="duotone" color="rgba(255,255,255,0.7)" />
              </Box>

              {/* Center accent — layered circles */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
