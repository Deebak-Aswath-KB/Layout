import React from 'react';
import Box from '@mui/material/Box';
import './InnerBox.css';
import ContentBox from './ContentBox';

function InnerBox() {
    return(
        <Box className="innerbox">
            <ContentBox></ContentBox>
        </Box>

    );
}
export default InnerBox;