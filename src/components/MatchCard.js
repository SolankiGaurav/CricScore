import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../App.css';
import Moment from 'react-moment';
import { Dangerous } from '@mui/icons-material';

function MatchCard({ match, openDetail }) {
    return (
        <div className='container mb-3'>
            <Accordion sx={{
                backgroundColor: "#88d9db"
            }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography align='center'>{match.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="row">
                        <div className="col-12 col-md-4 text-center justify-content-center align-items-center">
                            <div className="card border-0 border" style={{backgroundColor:'#88d9db'}}>
                                <img src={match.teamInfo[0].img} className="card-img-top cardImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{match.teamInfo[0].name}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <div className="row text-center justify-content-center align-items-center">
                                <p className='h6 fw-bold'>
                                    <Moment format="DD-MMM-YYYY">
                                        {match.dateTimeGMT}
                                    </Moment>
                                </p>
                                <p className='h1 fw-bold text-danger'>VS</p>
                                <p className='h6'>{match.venue}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center justify-content-center align-items-center">
                            <div className="card border-0 border" style={{backgroundColor:'#88d9db'}}>
                                <img src={match.teamInfo[1].img} className="card-img-top cardImg" alt="..." />
                                <div className="card-body">
                                    <Typography sx={{ typography: { xs: 'body', md: 'h5' } }} component="div">
                                        {match.teamInfo[1].name}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row px-2 mt-2">
                        {match.matchStarted ? (<button onClick={() => { openDetail(match.id) }} className="btn btn-success fw-bold">Show score and details</button>) : (<button className='btn btn-danger'>Match has not started yet</button>)}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MatchCard
