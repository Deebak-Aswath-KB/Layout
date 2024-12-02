import React from 'react';
import Box from '@mui/material/Box';
import './Child1.css';
import Logo from './Logo.png'
import EditIcon from '@mui/icons-material/Edit';

function Child1() {
    return(
        <Box className="child1">
            <div>
            <img src={Logo} alt='Logo'></img>
            <br></br>
            <EditIcon className='editbutton'></EditIcon>
            </div>
        </Box>
    );
}
export default Child1;