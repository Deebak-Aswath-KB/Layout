import React from 'react';
import Box from '@mui/material/Box';
import './ProfileName.css';
import EditIcon from '@mui/icons-material/Edit';

function ProfileName() {
    return(
        <Box className="profilename">
          
            <EditIcon className='editbutton'></EditIcon>
          
            <p>Profile Name</p>
            
        </Box>
    );
}
export default ProfileName;