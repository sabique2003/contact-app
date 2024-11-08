import React, { useState, useEffect } from 'react';
import { getFavourites, removeFromFavourites } from '../Services/allApis'; 

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = async () => {
    try {
      const res = await getFavourites();
      if (res.status === 200) {
        setFavourites(res.data); 
      }
    } catch (error) {
      console.error("Failed to fetch favourites", error);
    }
  };

  const handleRemoveFromFavourites = async (id) => {
    try {
      const res = await removeFromFavourites(id);
      if (res.status === 200) {
        
        setFavourites(favourites.filter(contact => contact.id !== id));
        toast.success("Removed from Favourites");
      } else {
        toast.error("Failed to remove from Favourites");
      }
    } catch (error) {
      console.error("Error removing from Favourites", error);
      toast.error("An error occurred while removing from Favourites");
    }
  };

  return (
    <div className="container-fluid">
      <h1 className='m-3'>Favourites</h1>
      <div className="d-flex align-items-center justify-content-center">
        <table className="table table-bordered shadow m-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {
              favourites.length > 0 ? favourites.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.Name}</td>
                  <td>{contact.MobileNo}</td>
                  <td>
                    <button className='btn btn-outline' onClick={() => handleRemoveFromFavourites(contact.id)}>
                      <i className="fa-solid fa-trash fa-xl" style={{ color: "#ba1738" }} />
                    </button>
                  </td>
                </tr>
              )) : <tr><td colSpan="4" className="text-center">No Favourites Added!</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favourites;
