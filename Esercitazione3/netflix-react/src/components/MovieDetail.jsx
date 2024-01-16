import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import AddComment from './AddComment';

export  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2JmMmMwNTgzNTAwMTg1MjMwZGMiLCJpYXQiOjE3MDUzMzk2MDksImV4cCI6MTcwNjU0OTIwOX0.YxpVWHun4kU9CetBnCDxsQY8o6d-6nlCO3AtDwjJ4ak"

export default function MovieDetail() {

   console.log(useNavigate);
    const { id } = useParams()
    const navigate = useNavigate();
    console.log(navigate);
    const [movieDetail, setMovieDetail] = useState({});
    const [commenti, setCommenti] = useState([]);



    useEffect(() => {
        axios.get("http://www.omdbapi.com/?apikey=55133792&i=" + id)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    setMovieDetail(response.data);
                    console.log(movieDetail);

                } else {
                    console.log("Errore Server!!!")
                }
            }).catch(error => console.error(error))

        axios.get("https://striveschool-api.herokuapp.com/api/movies/" + id + "/comments/", {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    setCommenti(response.data)
                } else {
                    console.log("Errore Server!!!")
                }
            }).catch(error => console.error(error))
    }, [])










    return (
        <>
            <div className='d-flex flex-row my-5'>
                <Card style={{ width: '20rem' }} className='d-flex flex-row border border-2 border-secondary'>
                    <Card.Img variant="top" src={movieDetail.Poster} />
                    <Card.Body className='border border-2 border-secondary'>
                        <Card.Title style={{ width: '20rem' }}>{movieDetail.Title}</Card.Title>
                        <Card.Text>
                            <strong>Year</strong>: {movieDetail.Year}
                        </Card.Text>
                        <Card.Text>
                            <strong>Type</strong>: {movieDetail.Type}
                        </Card.Text>
                        <Card.Text>
                            {movieDetail.Plot}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
             


               
            
             
           
            </div>   
            <AddComment movieId={id}/>
            <ListGroup className='mt-1 mb-5'>
                    {commenti.map(ele => (
                        <Card key={ele._id} className='my-2'>
                        <Card.Body>
                          <blockquote className="blockquote mb-0">
                            <p>
                              {' '}{ele.comment}.
                             {' '} {ele.rate} ⭐
                            </p>
                            <footer className="blockquote-footer">
                             {ele.author}
                            </footer>
                          </blockquote>
                        </Card.Body>
                      </Card>
                        
                    ))}
                </ListGroup>

            
        </>



    )
}
