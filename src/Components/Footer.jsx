import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <>
    <div className="bg-secondary py-2 container-fluid" style={{color:"#000000"}}>
      <Row className='p-5'>
        <Col sm={12} md={5}>
        <h3>Contact App 2024</h3>
        <p style={{textAlign:"justify"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint veritatis omnis saepe, sed sunt nam, non aliquid suscipit temporibus eius voluptate nulla aperiam provident unde, molestias cum atque sapiente.
        </p>
        </Col>
        <Col sm={12} md={2}>
        <h3>Links</h3>
        <div className='d-flex flex-column'>
          <Link  className="text-primary" to={'/'}>Landing</Link>
          <Link className="text-primary" to={'/home'}>Home</Link>
          <Link className="text-primary" to={'/fav'}>Favourites</Link>

        </div>
        </Col>
        <Col sm={12} md={5}>
        <h3>Feedback</h3>
        <textarea name="" id="" className='form-control'></textarea>
        <button className='btn btn-danger mt-4'>Send</button>
        </Col>
      </Row>
 <h5 className="text-center py-3">All rights reserved &copy; {currentYear}</h5>
    </div>
    </>
  )
}

export default Footer