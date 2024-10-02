import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

function Landing() {
  return (
    <>
      <div className="container-fluid mb-5 d-flex align-items-center" style={{height:"80vh"}}>
  <Row className="w-100 d-flex align-items-center">
    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} md={6}>
      <h2>
      <i className="fa-solid fa-id-card-clip" style={{color: "#5db8fe",}} />
              <span className='ms-2'>Contact App</span>
      </h2>
      <p style={{textAlign:"justify"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis labore alias laboriosam nemo ipsa placeat, reiciendis, minima praesentium debitis maxime. Unde labore quo reprehenderit, laborum tempore cum facere eum.
      </p>
      <div className="d-grid">
        <Link to={'/log'} className="btn btn-outline-info">Lets Go</Link>
      </div>
    </Col>
    <Col className='py-4 d-flex justify-content-center align-items-center' sm={12} md={6}>
      <img src="https://lh3.googleusercontent.com/proxy/di7D7Z_He7snezMOCcDvGPOd--KtZB_WoDasv2eF00M7lm7en0pR2nFeAzPv3iLOuwIp3-Xu8ybqZuVTyaL1ysRln9NvqYLSvhlT" alt="no image found" className='img-fluid' style={{maxHeight: '100%', objectFit: 'contain'}} />
    </Col>
  </Row>
</div>

    <div className="container-fluid my-5">
      <h3 className='my-3 text-center'>Features</h3>
      <div className="p-4 d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/213600/screenshots/3114385/icons.gif"  height={'200px'}/> 
      <Card.Body>
        <Card.Title>Add Contacts</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/e9/aa/43/e9aa4366d1fa9695d437523059e5a1cf.gif"  height={'200px'}/> 
      <Card.Body>
        <Card.Title>Delete Contacts</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/c3/44/b7/c344b7c94f3a15eedfa16e427767fc33.gif"  height={'200px'}/> 
      <Card.Body>
        <Card.Title>Edit Contacts</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Landing