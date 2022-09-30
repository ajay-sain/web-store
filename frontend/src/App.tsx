import React from 'react';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { blue, purple } from '@mui/material/colors';
import RootRoutr from './routers';


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{mt:10}}>
                <RootRoutr/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
