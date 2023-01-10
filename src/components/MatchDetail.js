import { Refresh } from '@mui/icons-material';
import { Dialog, Divider, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { getMatchInfo, getMatchInfo2 } from '../api/CricApi';

function MatchDetail({ open, onClose, id ,matchInfo,openMatchDetail}) {

    // const [matchInfo, setMatchInfo] = useState({"id":"88158d23-de78-4926-b291-55855472dcca","name":"Fortune Barishal vs Rangpur Riders, 7th Match","matchType":"t20","status":"Fortune Barishal won by 6 wkts","venue":"Shere Bangla National Stadium, Dhaka","date":"2023-01-10","dateTimeGMT":"2023-01-10T08:00:00","teams":["Fortune Barishal","Rangpur Riders"],"teamInfo":[{"name":"Fortune Barishal","shortname":"BRSAL","img":"https://g.cricapi.com/img/teams/164-637945412201891854.webp"},{"name":"Rangpur Riders","shortname":"RGR","img":"https://g.cricapi.com/img/teams/256-637938383952433044.webp"}],"score":[{"r":158,"w":7,"o":20,"inning":"Rangpur Riders Inning 1"},{"r":162,"w":4,"o":19.2,"inning":"Fortune Barishal Inning 1"}],"tossWinner":"Fortune Barishal","tossChoice":"bowl","matchWinner":"Fortune Barishal","series_id":"c05482f4-1ee5-41c5-b2f7-9b60eb270698","fantasyEnabled":true,"bbbEnabled":true,"hasSquad":true,"matchStarted":true,"matchEnded":true});
    const handleClose = () => {
        onClose("Closed");
    }



    const refreshScore = () => {
        openMatchDetail(id);
    }



    return (
        <div>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { minWidth: "80%", height: "100%" } }}>
                {matchInfo!="loading"?(   <div className="container">
                    <div className="my-4">
                        <IconButton onClick={refreshScore} className='float-end' size='large'>
                            <Refresh />
                        </IconButton>
                        <h4 className='text-center fw-bold text-dark'>{matchInfo && matchInfo.name}</h4>
                    </div>
                    <Divider />
                    <div className="row alert-info alert">
                        <div className="col-6 justify-content-center d-flex">
                            <img className='dialogImg' src={matchInfo.teamInfo && matchInfo.teamInfo[0].img} alt="" />
                        </div>
                        <div className="col-6">
                            <p className='h4 text-center fw-bold'>
                                {matchInfo.teamInfo && matchInfo.teamInfo[0].name}
                            </p>
                            <div className="row">
                                <h5 className='fw-bold text-center'>Scores</h5>
                               {(matchInfo.score[0] && matchInfo.score[0].inning.includes(matchInfo.teamInfo[0].name))?( <div className="col d-flex align-items-center justify-content-around">
                                    <p><strong>Runs</strong> - {matchInfo.score && matchInfo.score[0].r}</p>
                                    <p><strong>Wickets</strong> - {matchInfo.score && matchInfo.score[0].w}</p>
                                    <p><strong>Overs</strong> - {matchInfo.score && matchInfo.score[0].o}</p>
                                </div>):(matchInfo.score[1] && matchInfo.score[1].inning.includes(matchInfo.teamInfo[0].name))?(<div className="col d-flex align-items-center justify-content-around">
                                    <p><strong>Runs</strong> - {matchInfo.score && matchInfo.score[1].r}</p>
                                    <p><strong>Wickets</strong> - {matchInfo.score && matchInfo.score[1].w}</p>
                                    <p><strong>Overs</strong> - {matchInfo.score && matchInfo.score[1].o}</p>
                                </div>):(<h5>Inningings not started</h5>)
                                
                               }
                            </div>
                        </div>
                    </div>
                    <div className="row alert-success alert my-2">
                        <div className="col-6  text-center">
                            <strong>Toss Winner -<br /> {matchInfo && matchInfo.tossWinner}</strong>
                        </div>
                        <div className="col-6">
                            <p className='p-0 m-0'>
                                <strong>Date - <Moment format='DD-MMM-YYYY'>{matchInfo && matchInfo.dateTimeGMT}</Moment></strong>
                            </p>
                            <p className='p-0 m-0'><strong>Venue</strong> - {matchInfo && matchInfo.venue}</p>
                        </div>
                    </div>
                    <div className="row alert alert-info">
                        <div className="col-6 justify-content-center d-flex">
                            <img className='dialogImg' src={matchInfo.teamInfo && matchInfo.teamInfo[1].img} alt="" />
                        </div>
                        <div className="col-6">
                            <p className='h4 text-center fw-bold'>
                                {matchInfo.teamInfo && matchInfo.teamInfo[1].name}
                            </p>
                            <div className="row">
                                <h5 className='fw-bold text-center'>Scores</h5>
                                {(matchInfo.score[0] && matchInfo.score[0].inning.includes(matchInfo.teamInfo[1].name))?( <div className="col d-flex align-items-center justify-content-around">
                                    <p><strong>Runs</strong> - {matchInfo.score && matchInfo.score[0].r}</p>
                                    <p><strong>Wickets</strong> - {matchInfo.score && matchInfo.score[0].w}</p>
                                    <p><strong>Overs</strong> - {matchInfo.score && matchInfo.score[0].o}</p>
                                </div>):(matchInfo.score[1] && matchInfo.score[1].inning.includes(matchInfo.teamInfo[1].name))?(<div className="col d-flex align-items-center justify-content-around">
                                    <p><strong>Runs</strong> - {matchInfo.score && matchInfo.score[1].r}</p>
                                    <p><strong>Wickets</strong> - {matchInfo.score && matchInfo.score[1].w}</p>
                                    <p><strong>Overs</strong> - {matchInfo.score && matchInfo.score[1].o}</p>
                                </div>):(<h5>Inningings not started</h5>)
                               }
                            </div>
                        </div>
                    </div>
                    {
                        matchInfo.matchEnded ? (<div className="row bg-success">
                            <p className='h4 text-center my-2'>Winner - {matchInfo.matchWinner}</p>
                        </div>) : ("")
                    }
                </div>):(<h1 className='text-center'>Loading .........</h1>)}
            </Dialog>
        </div>
    )
}

export default MatchDetail
