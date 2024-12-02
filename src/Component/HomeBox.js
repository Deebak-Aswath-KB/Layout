import React from 'react';
import Box from '@mui/material/Box';
import './HomeBox.css';
import Child1 from './Child1';
import ProfileName from './ProfileName';
import CenterAligned from './CenterAligned';
import Top from './Top';
import Bottom from './Bottom';






function HomeBox() {
    return(
        <Box className="homebox">
            <Child1></Child1>
            <ProfileName></ProfileName>
            <CenterAligned></CenterAligned>
            <Top></Top>
            <Bottom></Bottom>

            
           
            
            
        </Box>
    );
}
export default HomeBox;