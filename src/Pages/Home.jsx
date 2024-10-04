import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contacts from '../Components/Contacts';
import { getContact } from '../Services/allApis';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [username,setUsername]=useState("")

  useEffect(() => {
    fetchContacts();
    const user=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  }, []);

  const fetchContacts = async () => {
    const res = await getContact();
    if (res.status === 200) {
      setContacts(res.data);
    } else {
      console.error("Failed to fetch contacts", res);
    }
  };

  const addNewContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteResponse = (deletedContact) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== deletedContact.id));
  };

  const handleUpdateResponse = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact)
    );
  };

  return (
    <>
<h2>Welcome {username} ...</h2>
      <div className='container-fluid mb-3'>
        <Row>
          <Col sm={12} md={10}>
            <Contacts
              contacts={contacts}
              addNewContact={addNewContact}
              handleDeleteResponse={handleDeleteResponse}
              handleUpdateResponse={handleUpdateResponse}
            />
          </Col>
          <Col sm={12} md={2} className='d-flex justify-content-center align-items-center'>
            <Link to='/fav' className='btn btn-info p-3'>
              Favourites <br />
              <i className='fas fa-star' style={{ fontSize: '1rem', color: 'black' }} />
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
