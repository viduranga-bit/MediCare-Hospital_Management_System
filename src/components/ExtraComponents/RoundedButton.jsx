import React from 'react';
import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const options = {
  shouldForwardProp: (prop) => prop !== 'rounded',
};

const Button = styled(
  MuiButton,
  options,
)(({ theme, rounded }) => ({
  borderRadius: rounded ? '24px' : null,
}));

const theme = createTheme({
  shape: {
    borderRadius: 5,
  },
});

function RoundedButton(props) {

    const { onClick, label } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Button variant="contained" rounded onClick={onClick}>
          {label}
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default RoundedButton;
