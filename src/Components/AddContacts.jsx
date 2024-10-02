import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addContact } from '../Services/allApis';

function AddContacts({ addNewContact }) {
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState({
    Name: "", MobileNo: ""
  });

  const handleUpload = async () => {
    const { Name, MobileNo } = contact;
    if (!Name || !MobileNo) {
      toast.error("Please Enter Valid Input!");
    } else {
      try {
        const res = await addContact(contact);
        if (res.status === 201) {
          toast.success("Upload Successful!");
          addNewContact(res.data);  // Call the callback to update the parent state
          handleClose();
        } else {
          toast.error("Upload Failed!");
        }
      } catch (err) {
        console.error(err);
        toast.warn("Upload Failed!");
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setContact({ Name: "", MobileNo: "" });
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-info' onClick={handleShow}>Add Contact</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={(e) => setContact({ ...contact, Name: e.target.value })} className='form-control mb-2' placeholder='Name' />
          <input type="text" onChange={(e) => setContact({ ...contact, MobileNo: e.target.value })} className='form-control mb-2' placeholder='Mobile Number' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContacts;
