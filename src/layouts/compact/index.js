'use client';

import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// ----------------------------------------------------------------------

export default function CompactLayout({ children }) {
  return (
    <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 400,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Stack>
      </Container>
  );
}

CompactLayout.propTypes = {
  children: PropTypes.node,
};
