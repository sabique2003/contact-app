import axios from "axios";

const baseurl="https://ca-server-2r6f.onrender.com"

export const addContact = async (data) => {
  return await axios.post(`${baseurl}/contacts`, data);
};

export const getContact = async () => {
  return await axios.get(`${baseurl}/contacts`);
};

export const deleteContact = async (id) => {
  return await axios.delete(`${baseurl}/contacts/${id}`);
};


export const updateContact = async (id, data) => {
  return await axios.put(`${baseurl}/contacts/${id}`, data); 
};


export const addToFavourites = async (contact) => {
  try {
    const response = await axios.get(`${baseurl}/favourites/${contact.id}`);
    if (response.data) {
      throw new Error("Contact is already in favourites");
    }
    return await axios.post(`${baseurl}/favourites`, contact);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return await axios.post(`${baseurl}/favourites`, contact);
    } else {
      throw error;
    }
  }
};

export const removeFromFavourites = async (id) => {
  return await axios.delete(`${baseurl}/favourites/${id}`);
};

export const getFavourites = async () => {
  return await axios.get(`${baseurl}/favourites`);
};
export const checkEmailApi=async(email)=>{
  return await axios.get(`${baseurl}/users?email=${email}`)
}
export const registerApi=async(data)=>{
  return await axios.post(`${baseurl}/users`,data)
}
export const loginApi=async(email,password)=>{
  return await axios.get(`${baseurl}/users?email=${email}&password=${password}`)
}
