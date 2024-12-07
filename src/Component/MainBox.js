import React from 'react';
import Box from '@mui/material/Box';
import './MainBox.css';
import { Grid } from '@mui/material';
import ProfileName from './ProfileName';
import CenterAligned from './CenterAligned';
import TopCenteraligned from './TopCenteraligned';
import Bottom from './Bottom';
import ProfileLogo from './ProfileLogo';




function MainBox() {
    return(
        <Box className="mainbox">
            <Grid container spacing={0} className='row'>
                <Grid item md={6}>
                    <ProfileLogo></ProfileLogo>
                    <ProfileName></ProfileName>
                </Grid>
                <Grid item md={6}>
                    <CenterAligned></CenterAligned>
                    <TopCenteraligned></TopCenteraligned>
                    <Bottom/>
                </Grid>
            </Grid>     
           
        </Box>

    );
}
export default MainBox;