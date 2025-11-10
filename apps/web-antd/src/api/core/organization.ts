import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

async function getOrganizationList(params: Recordable<any>) {
  return requestClient.get('/organizations', { params });
}
