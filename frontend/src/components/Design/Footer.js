// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} My Application. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
