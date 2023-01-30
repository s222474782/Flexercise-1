import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return(
<Box mt="80px" bgcolor="#CCCCCC">
<Stack gap="40px" alignItems="center" px="40px" pt="24px">
<img src={Logo} alt="logo" width="150px" height="90px" />
<Typography variant="h5" pb="40px" mt="20px">
  Made by Marek Przybylkiewicz and Team
</Typography>
</Stack>
</Box>
  )
}

export default Footer