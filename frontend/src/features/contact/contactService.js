import axios from 'axios';

const API_URL = 'http://localhost:3090/api/contact'

const createContact = async (contactDetails) => {
  const response = await axios.post(`${API_URL}/create-contact`, contactDetails)
  return response.data
}

const contactService = {
    createContact,
}

export default contactService;