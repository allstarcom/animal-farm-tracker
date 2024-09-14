// src/components/Design/Layout.js
import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box display="flex" flexDirection="row" sx={{ flex: 1 }}>
                {/* Sidebar should be fixed on the left side */}
                <Box component="nav" sx={{ width: 240, flexShrink: 0 }}>
                    {children[0]} {/* Sidebar */}
                </Box>
                <Box component="main" sx={{ flex: 1, padding: '20px' }}>
                    {children[1]} {/* Main content (Routes) */}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
