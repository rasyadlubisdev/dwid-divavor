import './App.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Images from './Images';
import Home from './icons/home.svg';

import Button from './components/Button';
import ButtonSmall from './components/ButtonSmall';
import SearchBox from './components/SearchBox';
import Profile from './components/Profile';
import Bar from './components/Bar';
import CardRecomendation from './components/CardRecomendation';
import Tab from './components/Tab';
import CsButton from './components/CsButton';
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';

import profileImage from './IMG/img-2.jpg';

function App() {

  return (
    <div className="App"
      style={{
        backgroundColor: "#EFEDF4",
      }}>
      <div className="container"
        style={{
          width: 375,
          maxWidth: 375,
          height: "100vh",
          backgroundColor: "#FFF",
          margin: "0 auto",
          position: "relative",
        }}>
        <div className="padding"
          style={{
            padding: "0 24px",
          }}>

          <Hiro />

        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
