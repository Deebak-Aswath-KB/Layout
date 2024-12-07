import React from 'react';
import Box from '@mui/material/Box';
import './ProfileLogo.css';
import EditIcon from '@mui/icons-material/Edit';
import  Image from './Image/img.jpg';


function ProfileLogo() {

    return(
        <Box className="profilelogo">
            
                    
                        <img src={Image} alt='pkpo'></img>
                        
                        <EditIcon className='button'></EditIcon>
                        
            
        </Box>
    );
}
export default ProfileLogo;