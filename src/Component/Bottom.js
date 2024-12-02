import React from 'react';
import Box from '@mui/material/Box';
import './Bottom.css';
import One from './One';
import Two from './Two';
import Three from './Three';

function Bottom() {
    return(
        <Box className="bottom">
           <One></One> 
           <Two></Two>
           <Three></Three>
        </Box>
    );
}
export default Bottom;