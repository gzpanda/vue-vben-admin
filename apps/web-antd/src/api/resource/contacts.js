import { requestClient } from '#/api/request';

async function getContactList(params) {
  return requestClient.get('/contacts', { params });
}

async function getContact(id) {
  return requestClient.get(`/contacts/${id}`);
}

async function createContact(data) {
  return requestClient.post('/contacts', data);
}

async function updateContact(id, data) {
  return requestClient.put(`/contacts/${id}`, data);
}

async function deleteContact(id) {
  return requestClient.delete(`/contacts/${id}`);
}

export {
  createContact,
  deleteContact,
  getContact,
  getContactList,
  updateContact,
};
