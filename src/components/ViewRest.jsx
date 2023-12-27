import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {

//  const paraId=useParams()
//  console.log(paraId.id);//object -> id=1

//destructure
const {id}=useParams()
 console.log(id);

 //API call to get details of the particular restaurant using the path parameter
 const base_url='https://restaurant-backend-1op8.onrender.com/restaurants'

 const[restDetails,SetRestDetails]=useState(0)

 const fetchRest=async()=>{
  const result =await axios.get(`${base_url}/${id}`)
  console.log(result.data);
  SetRestDetails(result.data)
 }
 console.log(restDetails);

 useEffect(()=>{
  fetchRest()
 },[])

  return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} alt='' style={{width:'450px',height:'500px'}}></img>
        </Col>
        <Col>
        <div className='container my-5 p-5'>
        <ListGroup >
          <h1 className='text-center'>{restDetails.name}</h1>
      <ListGroup.Item>Address :{restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Neighborhood: {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview RR={restDetails.reviews}/></ListGroup.Item>
      <ListGroup.Item>Cuisine Type:{restDetails.cuisine_type}</ListGroup.Item>
     
      </ListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest


