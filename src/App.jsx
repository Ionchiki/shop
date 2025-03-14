/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import React, { useContext } from 'react';
import { Container, Typography, Grid, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ThemeContext } from './context/ThemeContext';
function App() {
 const theme = useTheme();
 const { toggleTheme } = useContext(ThemeContext);
 return (
   <Container>
     <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
       Интернет-магазин
     </Typography>
     <IconButton onClick={toggleTheme} sx={{ position: 'absolute', top: 16, right: 
16 }}>
       {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
     </IconButton>
     <Grid container spacing={2}>
       <Grid item xs={12} md={9}>
         <ProductList />
       </Grid>
       <Grid item xs={12} md={3}>
         <Cart />
       </Grid>
     </Grid>
   </Container>
 );
}

export default App;