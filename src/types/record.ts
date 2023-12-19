import { Endpoint } from './request';

export interface DeleteRecordResponse {
  isSuccess: boolean;
}

export interface RecordToDelete {
  endpoint: Endpoint;
  id: string;
}
