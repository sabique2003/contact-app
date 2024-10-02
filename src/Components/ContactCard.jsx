import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteContact, updateContact, addToFavourites, removeFromFavourites, getFavourites } from '../Services/allApis';
import { toast } from 'react-toastify';

function ContactCard({ contact, response, updateResponse, deleteResponse }) {
  const [isFavorited, setIsFavorited] = useState(false); // Track if contact is favorited
  const [show, setShow] = useState(false);
  const [editName, setEditName] = useState(contact?.Name);
  const [editMobileNo, setEditMobileNo] = useState(contact?.MobileNo);

  // Check if the contact is in favourites when component mounts
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const favouritesRes = await getFavourites();
        const isFav = favouritesRes.data.some((favContact) => favContact.id === contact.id);
        setIsFavorited(isFav);
      } catch (error) {
        console.error('Error fetching favourite status:', error);
      }
    };

    fetchFavoriteStatus();
  }, [contact]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      const res = await deleteContact(contact.id);
      if (res.status === 200) {
        toast.success("Deleted successfully");
        deleteResponse(contact); // Notify parent to remove contact
      } else {
        toast.warn("Contact not deleted");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };

  const handleClick = async () => {
    try {
      if (isFavorited) {
        // Remove from favourites
        const res = await removeFromFavourites(contact.id);
        if (res.status === 200) {
          setIsFavorited(false);
          toast.success("Removed from Favourites");
          response({ ...contact, isFavourite: false }); // Notify parent
        } else {
          toast.error("Failed to remove from Favourites");
        }
      } else {
        // Add to favourites
        const res = await addToFavourites(contact);
        if (res.status === 201) {
          setIsFavorited(true);
          toast.success("Added to Favourites");
          response({ ...contact, isFavourite: true });
        } else {
          toast.error("Failed to add to Favourites");
        }
      }
    } catch (error) {
      // Display error only if it was not a 409 (conflict) or 404 (not found) for favourites.
      if (error.response && error.response.status === 409) {
        toast.warn("Contact is already in Favourites");
      } else if (error.response && error.response.status !== 404) {
        // Avoid showing error for 'not found' in case of removal from an empty favourites list
        toast.error("An error occurred while updating Favourites");
      }
      console.error('Error:', error);
    }
  };
  

  const handleEditSave = async () => {
    const updatedContact = {
      ...contact,
      Name: editName,
      MobileNo: editMobileNo,
    };

    try {
      const res = await updateContact(contact.id, updatedContact);
      if (res.status === 200) {
        toast.success("Contact updated successfully");
        updateResponse(updatedContact); // Notify parent to update the contact
        handleClose();
      } else {
        toast.warn("Contact not updated");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating");
    }
  };

  return (
    <>
      <Card style={{ width: '12rem' }} className='border shadow'>
        <Card.Body>
          <Card.Title className='text-center'>{contact?.Name}</Card.Title>
          <Card.Text className='text-center'>{contact?.MobileNo}</Card.Text>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-outline' onClick={handleShow}>
              <i className="fa-regular fa-pen-to-square fa-xl" style={{ color: "#282a2f" }} />
            </button>
            <button
              onClick={handleClick}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              className='ms-4'
            >
              <i
                className={isFavorited ? 'fas fa-star' : 'far fa-star'}
                style={{ fontSize: '1.5rem', color: isFavorited ? 'gold' : 'black' }}
              ></i>
            </button>
            <button className='btn btn-outline ms-4' onClick={handleDelete}>
              <i className="fa-solid fa-trash fa-xl" style={{ color: "#ba1738" }} />
            </button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className='form-control mb-2'
            placeholder='Name'
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="text"
            className='form-control mb-2'
            placeholder='Mobile Number'
            value={editMobileNo}
            onChange={(e) => setEditMobileNo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-success' onClick={handleEditSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactCard;
