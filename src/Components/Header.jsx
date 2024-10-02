import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href="/">
          <i className="fa-solid fa-id-card-clip" style={{color: "#ffff",}} />
          {' '}
            Contact App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header