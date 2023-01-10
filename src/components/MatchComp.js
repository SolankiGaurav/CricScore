import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MatchCard from './MatchCard'
import MatchDetail from './MatchDetail';
import { getMatchInfo, getMatchInfo2 } from '../api/CricApi';

function MatchComp(props) {

  const {matches,query}=props;
  const [open, setOpen] = useState(false);
  const [matchId,setMatchId]=useState(0);
    const [matchInfo, setMatchInfo] = useState("loading");
    const capitalize = (word) => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  }


  const handleClose = () => {
    setMatchInfo("loading");
    setOpen(false);
  }

  const openMatchDetail=(id)=>{
    getMatchInfo(id).then(d=>d.json()).then(data=>{
      setMatchInfo(data.data);
    })
    setMatchId(id);
    setOpen(true);
  }

  return (
    <div>
      <Typography className='mb-4 text-success' sx={{ typography: { xs: 'h4', md: 'h4' } }} align='center'>{query == "" ? "All" : query == "t20" ? "20-20" : capitalize(query)} - Matches</Typography>
      {matches.length==0?(<Typography className='text-danger text-center mt-5' variant='h6'>No matches to show right now.....</Typography>):(matches.map(a => <MatchCard key={a.id} match={a} openDetail={openMatchDetail}/>))}
      <MatchDetail open={open} onClose={handleClose} openMatchDetail={openMatchDetail} id={matchId} matchInfo={matchInfo} />
    </div>
  )
}

export default MatchComp
