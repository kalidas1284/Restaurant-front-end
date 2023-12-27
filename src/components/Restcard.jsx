import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Restcard({rest}) {
    console.log(rest);
  return (
    <div>
       <Link to={`view/${rest.id}`} style={{textDecoration:'none'}}>
       <MDBCard className='my-4 mx-3' style={{height:'600px'}}>
      <MDBCardImage src={rest.photograph} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{rest.name}</MDBCardTitle>
        <MDBCardText>
          {rest.address}
        </MDBCardText>
    
      </MDBCardBody>
    </MDBCard>
       </Link>
    </div>
  )
}

export default Restcard