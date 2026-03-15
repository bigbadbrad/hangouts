'use client';

import type { FC } from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { IconCircle } from '@/components/icon-circle';
import { Logo } from '@/components/logo';

interface ClaimUsernameModalProps {
  open: boolean;
  onClose: () => void;
}

const textFieldSx = {
  mb: 2,
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255,255,255,0.05)',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.35)' },
    '&.Mui-focused fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.6)' },
  '& .MuiInputBase-input': { color: '#FFFFFF' },
};

export const ClaimUsernameModal: FC<ClaimUsernameModalProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() && !phone.trim()) return;
    // TODO: wire up to API
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1d1d1f',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 3,
        },
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <DialogTitle
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: 64, height: 64, flexShrink: 0 }}>
              <IconCircle fill="#FFFFFF" />
            </Box>
            <Box sx={{ mt: -0.5, display: 'flex', justifyContent: 'center' }}>
              <Logo textColor="#FFFFFF" height={34} />
            </Box>
          </Box>
          Claim your username<br />before beta opens
        </DialogTitle>
        <DialogContent sx={{ pt: 0 }}>
          <Typography
            sx={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.6,
              textAlign: 'center',
              mb: 3,
            }}
          >
            Reserve your name now and we&apos;ll let you know as soon as Hangouts opens for early access.
          </Typography>

          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={textFieldSx}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="Provide email or phone (at least one)"
            FormHelperTextProps={{ sx: { color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' } }}
            sx={textFieldSx}
          />
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ ...textFieldSx, mb: 3 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={!email.trim() && !phone.trim()}
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#0f0f11',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              py: 1.5,
              mb: 2,
              '&:hover': {
                backgroundColor: '#e8e8ea',
              },
            }}
          >
            Claim my username
          </Button>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              Free to reserve
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              •
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              No spam
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              •
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              Early users get first access
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
