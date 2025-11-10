import { requestClient } from '#/api/request';

async function getOrganizationList(params) {
  return requestClient.get('/organizations', { params });
}

async function createOrganization(data) {
  return requestClient.post('/organizations', data);
}

async function updateOrganization(id, data) {
  return requestClient.put(`/organizations/${id}`, data);
}

async function deleteOrganization(id) {
  return requestClient.delete(`/organizations/${id}`);
}

async function getOrganization(id) {
  return requestClient.get(`/organizations/${id}`);
}

export {
  createOrganization,
  deleteOrganization,
  getOrganization,
  getOrganizationList,
  updateOrganization,
};
