import './styles.css';
import './Ifo.css'
import {Hompage} from "./Hompage";
import {LeaderboardPage} from "./Leaderboard Page";
import {IFOPage} from "./IFO Page";
import {SwapPage} from "./Swap Page";
import {AffiliatesPage} from "./Affiliates Page";
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'



function App() {

  return (
      <div>
       <AffiliatesPage></AffiliatesPage>
      </div>

  )
}

export default App;
