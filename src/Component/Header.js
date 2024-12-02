import React from 'react';
import Box from '@mui/material/Box';
import './Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    return(
        <Box className="header">
            <div>
            <ArrowBackIcon className='back'></ArrowBackIcon>
            <ArrowForwardIcon className='back'></ArrowForwardIcon>
            <RefreshIcon className='back'></RefreshIcon>
            <CloseIcon className='refresh'></CloseIcon>
            </div>
        </Box>
        
    );
}
export default Header;