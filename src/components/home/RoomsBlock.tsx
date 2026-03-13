'use client';

import type { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Sparkle as SparkleIcon,
  Microphone as MicrophoneIcon,
  Smiley as SmileyIcon,
  ArrowsClockwise as ArrowsClockwiseIcon,
} from '@phosphor-icons/react';

const cards = [
  {
    eyebrow: 'The vibe shifts',
    headline: 'The room changes with the energy',
    body: 'As the hangout gets louder, funnier, flirtier, or more chaotic, the room responds. Lighting, sound, atmosphere, and the whole mood shift in ways that make the space feel alive.',
    Icon: SparkleIcon,
  },
  {
    eyebrow: 'The room talks back',
    headline: 'Characters actually participate',
    body: 'Hosts, bartenders, DJs, fortune tellers, and other personalities can jump into the moment, react to what\'s happening, and keep the room from going flat. It feels less like a static backdrop and more like stepping into a scene.',
    Icon: MicrophoneIcon,
  },
  {
    eyebrow: 'More than emotes',
    headline: 'Avatars feel more alive',
    body: 'Conversations feel more real when avatars respond naturally in the moment. Faces, movement, and expression make the hangout feel more human and more immersive.',
    Icon: SmileyIcon,
  },
  {
    eyebrow: 'Always moving',
    headline: 'The experience adapts in real time',
    body: 'Hangouts don\'t have to follow a script. The room can sense when things are clicking, when the energy drops, or when it\'s time for a shift, then turn the moment into something bigger.',
    Icon: ArrowsClockwiseIcon,
  },
];

export const RoomsBlock: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(180deg, #1d1d1f 0%, #16161a 50%, #1a1525 100%)',
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
              Why it feels alive
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
              Rooms that react to your group
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
              Hangouts are built to shift with the mood, bring the room to life, and keep every hangout moving.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.14)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                  }}
                >
                  <card.Icon size={24} weight="duotone" color="rgba(255,255,255,0.9)" />
                </Box>
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
                  {card.eyebrow}
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
                  {card.headline}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.9375rem',
                    color: '#a1a1a6',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {card.body}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
