import React from 'react';
import Box from '@mui/material/Box';
import './Parent.css';
import Header from './Header';
import InnerBox from './InnerBox';

function Parent() {
    return(
        <Box className="parent">
            <Header></Header>
            <InnerBox></InnerBox>
        </Box>
    );
}
export default Parent;