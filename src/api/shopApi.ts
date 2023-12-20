import axios from 'axios';
import { API_URL } from '../constants/api';
import {
  EndpointDataByPageMap,
  EndpointDataRecordsMap,
  EndpointDataSingleRecordMap,
  GetRecordsByPageParams,
} from '../types/request';

console.log('APIURL', API_URL);

const shopApiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRecordsByPage = async <T extends keyof EndpointDataByPageMap>(
  endpoint: T,
  params: GetRecordsByPageParams
): Promise<EndpointDataByPageMap[T]> => {
  let url = `${endpoint}?page=${params.page}`;
  for (const [key, value] of Object.entries(params)) {
    if (value && key !== 'page') {
      url += `&${key}=${value}`;
    }
  }

  console.log('URL', url);
  console.log(shopApiInstance);

  const res = await shopApiInstance.get(`/${url}`);
  console.log('RES', res);

  if (res.status >= 200 && res.status < 300) {
    return res.data as EndpointDataByPageMap[T];
  } else {
    throw new Error(`Failed to fetch`);
  }
};

export const getRecordById = async <
  T extends keyof EndpointDataSingleRecordMap
>(
  endpoint: T,
  id: string
): Promise<EndpointDataSingleRecordMap[T]> => {
  const res = await shopApiInstance.get(`/$${endpoint}/${id}`);

  if (res.status >= 200 && res.status < 300) {
    return res.data as EndpointDataSingleRecordMap[T];
  } else {
    throw new Error(`Failed to fetch`);
  }
};

export const getAllRecords = async <T extends keyof EndpointDataRecordsMap>(
  endpoint: T
): Promise<EndpointDataRecordsMap[T]> => {
  const res = await shopApiInstance.get(`/${endpoint}`);

  if (res.status >= 200 && res.status < 300) {
    return res.data as EndpointDataRecordsMap[T];
  } else {
    throw new Error(`Failed to fetch`);
  }
};
