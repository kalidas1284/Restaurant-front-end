import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Restcard from './Restcard'


function Allrest() {

  const base_url='https://restaurant-backend-1op8.onrender.com/restaurants'

  //to hold array of restaurant data
  const[AllRestData,SetAllRestData]=useState([])


  const fetchData=async()=>{
    const result=await axios.get(base_url)
    console.log(result.data);
    SetAllRestData(result.data)
  }

  console.log(AllRestData);//array(10)

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
           <Col sm={12} md={6} lg={4} xl={3} >
           <Restcard rest={item}/>
           </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Allrest