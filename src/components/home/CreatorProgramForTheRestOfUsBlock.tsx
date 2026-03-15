'use client';

import type { FC } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Play as LiveIcon,
  FloppyDisk as SaveIcon,
  Storefront as PublishIcon,
  Users as UsersIcon,
  House as HouseIcon,
  Palette as PaletteIcon,
  Package as PackageIcon,
} from '@phosphor-icons/react';

const supportingItems = [
  {
    title: 'Rooms become creations',
    body: 'A live room state, atmosphere, or scene can be saved and turned into something people come back to.',
    Icon: HouseIcon,
  },
  {
    title: 'Looks can be published',
    body: 'When a style hits, save it, name it, and make it available for others to wear.',
    Icon: PaletteIcon,
  },
  {
    title: 'Moments become products',
    body: 'The best combinations of mood, space, character, and energy can live on beyond a single hangout.',
    Icon: PackageIcon,
  },
  {
    title: 'Everyone can create',
    body: "You don't need to be a professional 3D artist to shape something worth sharing.",
    Icon: UsersIcon,
  },
];

const creatorLoopSteps = [
  { label: 'Live Hangout', sub: 'active room', Icon: LiveIcon },
  { label: 'Saved', sub: 'captured vibe', Icon: SaveIcon },
  { label: 'Published', sub: 'named & shared', Icon: PublishIcon },
  { label: 'Used by others', sub: 'in new hangouts', Icon: UsersIcon },
];

export const CreatorProgramForTheRestOfUsBlock: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: `
          radial-gradient(ellipse 100% 60% at 80% 50%, rgba(120, 90, 140, 0.14) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 20% 60%, rgba(90, 70, 110, 0.1) 0%, transparent 45%),
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
            @keyframes creator-rest-glow {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.9; }
            }
            @keyframes creator-rest-pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02); }
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
          {/* Left: Copy + supporting items + CTAs */}
          <Box sx={{ order: { xs: 1, md: 2 } }}>
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
                Creator Program for the Rest of Us
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
                Save the vibe. Share it. Sell it.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  color: '#a1a1a6',
                  lineHeight: 1.65,
                  mb: 3,
                }}
              >
                In Hangouts, the best looks, rooms, and live moments don&apos;t have to disappear. Save what the room creates, remix it, publish it, and turn it into something other people can use.
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
                  See How Creation Works
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Right: Creator loop visual — Live → Saved → Published → Used */}
          <Box
            sx={{
              order: { xs: 2, md: 1 },
              position: 'relative',
              minHeight: { xs: 360, md: 420 },
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 280,
                  height: 120,
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(140, 100, 180, 0.25) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                  animation: 'creator-rest-glow 5s ease-in-out infinite',
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 1.5, sm: 0.5 },
                  flexWrap: 'wrap',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {creatorLoopSteps.map((step, i) => (
                  <Box
                    key={step.label}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 72, sm: 80 },
                        height: { xs: 88, sm: 96 },
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.12)',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.5,
                        transition: 'all 0.3s ease',
                        animation: 'creator-rest-pulse 4s ease-in-out infinite',
                        animationDelay: `${i * 0.3}s`,
                        '&:hover': {
                          borderColor: 'rgba(255,255,255,0.2)',
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                        },
                      }}
                    >
                      <step.Icon size={28} weight="duotone" color="rgba(255,255,255,0.8)" />
                      <Typography
                        sx={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          color: 'rgba(255,255,255,0.9)',
                          textAlign: 'center',
                          lineHeight: 1.2,
                        }}
                      >
                        {step.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.625rem',
                          color: 'rgba(255,255,255,0.5)',
                          textAlign: 'center',
                        }}
                      >
                        {step.sub}
                      </Typography>
                    </Box>
                    {i < creatorLoopSteps.length - 1 && (
                      <Box
                        sx={{
                          display: { xs: 'none', sm: 'block' },
                          width: 16,
                          color: 'rgba(255,255,255,0.3)',
                          '& svg': { width: '100%', height: 'auto' },
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>

              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.45)',
                  mt: 1,
                }}
              >
                Energy → Product
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
