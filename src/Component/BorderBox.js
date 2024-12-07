import React from 'react';
import Box from '@mui/material/Box';
import './BorderBox.css';
import MainBox from './MainBox';





function BorderBox() {
    return(
        <Box className="borderbox">
            <MainBox></MainBox>
        </Box>

    );
}
export default BorderBox;