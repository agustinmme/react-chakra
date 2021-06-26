import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


