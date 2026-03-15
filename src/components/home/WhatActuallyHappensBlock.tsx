'use client';

import type { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const scenarios = [
  {
    kicker: 'When the vibe starts to dip',
    title: 'The room changes before the silence settles in',
    body: 'A conversation starts to stall. The lighting tightens, the music shifts, and the whole space changes tone before the moment fully dies.',
    mood: 'tension-rescue',
  },
  {
    kicker: 'When the room needs a spark',
    title: 'A character jumps in at exactly the right time',
    body: 'A host, bartender, DJ, or other in-room personality steps in with a reaction, interruption, or observation that pushes the energy forward.',
    mood: 'spark-interruption',
  },
  {
    kicker: 'When two people start clicking',
    title: 'The room leans into the chemistry',
    body: 'As the energy builds between people, the space gets warmer, quieter, and more focused so the moment feels bigger than a normal chat.',
    mood: 'warmth-chemistry',
  },
];

export const WhatActuallyHappensBlock: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 70%, rgba(88, 72, 120, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 20% 80%, rgba(60, 55, 90, 0.06) 0%, transparent 40%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(55, 50, 80, 0.06) 0%, transparent 40%),
          linear-gradient(180deg, #1a1525 0%, #1a1525 20%, #16161a 55%, #1d1d1f 100%)
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
            @keyframes happens-tighten {
              0%, 100% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(0.85); opacity: 0.2; }
            }
            @keyframes happens-pulse-glow {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.6; }
            }
            @keyframes happens-cool-warm {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.7; }
            }
            @keyframes happens-spark-slide {
              0% { transform: translateX(-20px); opacity: 0; }
              40% { transform: translateX(0); opacity: 0.8; }
              100% { transform: translateX(0); opacity: 0.4; }
            }
            @keyframes happens-halo-pulse {
              0%, 100% { transform: scale(1); opacity: 0.15; }
              50% { transform: scale(1.15); opacity: 0.35; }
            }
            @keyframes happens-draw-closer {
              0%, 100% { transform: translate(0, 0); }
              50% { transform: translate(-8px, -4px); }
            }
            @keyframes happens-draw-closer-2 {
              0%, 100% { transform: translate(0, 0); }
              50% { transform: translate(8px, 4px); }
            }
            @keyframes happens-soften {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.4; }
            }
          `,
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
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
              What actually happens
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              The room knows when to change the moment.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: '#a1a1a6',
                lineHeight: 1.6,
                maxWidth: 560,
                mx: 'auto',
              }}
            >
              Hangouts is built to sense when the energy shifts and turn it into something better, before the room goes flat.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 4 },
          }}
        >
          {scenarios.map((scenario, i) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.14)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                  },
                }}
              >
                {/* Card 1: Tension / rescue — atmosphere shifting, rings tightening, cool to warm */}
                {scenario.mood === 'tension-rescue' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: 140,
                        height: 140,
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.12)',
                        animation: 'happens-tighten 4s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.08)',
                        animation: 'happens-tighten 4s ease-in-out infinite 0.5s',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(180deg, transparent, rgba(180, 140, 120, 0.15))',
                        animation: 'happens-cool-warm 5s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '15%',
                        top: '30%',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,200,150,0.2) 0%, transparent 70%)',
                        filter: 'blur(8px)',
                        animation: 'happens-pulse-glow 4s ease-in-out infinite 1s',
                      }}
                    />
                  </Box>
                )}

                {/* Card 2: Spark / interruption — figure presence, spark from side, halo */}
                {scenario.mood === 'spark-interruption' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '10%',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 80,
                        borderRadius: 2,
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
                        animation: 'happens-spark-slide 6s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '20%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                        animation: 'happens-halo-pulse 4s ease-in-out infinite 0.3s',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '25%',
                        top: '35%',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, transparent)',
                        animation: 'happens-spark-slide 5s ease-in-out infinite 1.5s',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '30%',
                        top: '40%',
                        right: '20%',
                        height: 2,
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.15), transparent)',
                        borderRadius: 1,
                        opacity: 0.5,
                      }}
                    />
                  </Box>
                )}

                {/* Card 3: Warmth / chemistry — two points drawing closer, softer ambient */}
                {scenario.mood === 'warmth-chemistry' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '35%',
                        top: '45%',
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,220,180,0.4) 0%, rgba(255,200,150,0.1) 70%, transparent)',
                        animation: 'happens-draw-closer 6s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '35%',
                        top: '45%',
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,220,180,0.35) 0%, rgba(255,200,150,0.08) 70%, transparent)',
                        animation: 'happens-draw-closer-2 6s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200, 160, 140, 0.12) 0%, transparent 60%)',
                        animation: 'happens-soften 5s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,230,200,0.08) 0%, transparent 70%)',
                        filter: 'blur(6px)',
                        animation: 'happens-soften 6s ease-in-out infinite 0.5s',
                      }}
                    />
                  </Box>
                )}

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.55)',
                      mb: 1,
                    }}
                  >
                    {scenario.kicker}
                  </Typography>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.375rem' },
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      mb: 1.5,
                    }}
                  >
                    {scenario.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9375rem',
                      color: '#a1a1a6',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {scenario.body}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
