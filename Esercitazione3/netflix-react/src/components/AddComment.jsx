import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { token } from './MovieDetail';
import axios from 'axios'

export default function (props) {
 console.log(props.movieId);
   

    const [message, setMessage] = useState({
        comment: "",
        rate: "1",
        elementId: props.movieId
    })

    function handleChange(e) {
        setMessage({
            // per non copiare singolarmente ogni proprietà (comment, rate e eleementId) uno uno spread operator
            ...message,
            // devo passare la proprietà name ad ogni input che ha valore la chiave delle proprietà message
            [e.target.name]: e.target.value
        });
    }

    function post () {
        axios.post("https://striveschool-api.herokuapp.com/api/comments/", message, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                   
                } else {
                    console.log("Errore Server!!!")
                }
            }).catch(error => console.error(error))

    }


    return (
        <div style={{ width: '15rem' }}> <Form >
            <Form.Label htmlFor="inputPassword5">Comments</Form.Label>
            <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                name="comment"
                value={message.comment}
                onChange={handleChange}
            />
            <Form.Label htmlFor="inputPassword5">rate</Form.Label>
            <Form.Control
                type="number"
                aria-describedby="passwordHelpBlock"
                name="rate"
                value={message.rate}
                onChange={handleChange}
            />
            <Form.Text id="passwordHelpBlock" muted>
                scrivi responsbilmente
            </Form.Text>
        </Form>


            <Button variant="success" onClick={post}>Post</Button></div>
    )
}
