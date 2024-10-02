import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactCard from './ContactCard';
import AddContacts from './AddContacts';

function Contacts({ contacts, addNewContact, handleDeleteResponse, handleUpdateResponse }) {
  
  const handleResponse = (updatedContact) => {
    // Ensure contact list updates favorite status
    setContacts((prevContacts) =>
      prevContacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <div className="border shadow p-5 my-3">
      <div className="d-flex justify-content-between mb-3">
        <h3>All Contacts</h3>
        <AddContacts addNewContact={addNewContact} />
      </div>
      <Row>
        {contacts.length > 0 ? (
          contacts.map((item) => (
            <Col key={item.id} className='d-flex justify-content-center align-items-center mt-4'>
              <ContactCard
                contact={item}
                deleteResponse={handleDeleteResponse}  // To delete contact
                updateResponse={handleUpdateResponse}  // To update contact
                response={handleResponse}              // To handle favorites
              />
            </Col>
          ))
        ) : (
          <h2 className="text-center text-danger">No Contacts Available!</h2>
        )}
      </Row>
    </div>
  );
}

export default Contacts;
