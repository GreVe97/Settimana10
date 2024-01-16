
import React, { Component } from 'react'
import { Container, Spinner, Alert, } from 'react-bootstrap';
import { urlApi } from '../dati/api';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function MettiFilm({film}) {

    const navigate = useNavigate();
   

  return (
    
    <OverlayTrigger
                                        placement="auto-start"                                        
                                        overlay={
                                            <Popover id={`popover-positioned-${film.imdbID}`}>
                                                <Card style={{ width: '10rem' }} className='d-flex flex-row border border-2 border-secondary pe-none'>
                                                    <Card.Img variant="top" src={film.Poster} />
                                                    <Card.Body className='border border-2 border-secondary'>
                                                        <Card.Title style={{ width: '10rem' }}>{film.Title}</Card.Title>
                                                        <Card.Text>
                                                            <strong>Year</strong>: {film.Year}
                                                        </Card.Text>
                                                        <Card.Text>
                                                          <strong>Type</strong>: {film.Type}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            Qui avrei messo il plot, ma le API non lo forniscono!
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card> 
                                            </Popover>}>
                                        <a onClick={() => navigate("/detail/" + film.imdbID) }><img src={film.Poster} alt={film.Title}/></a>
                                    </OverlayTrigger>

  )
}
