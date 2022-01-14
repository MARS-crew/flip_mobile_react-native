import { WorkbookListResult } from '../types';
import client from './client';

export async function getMyWorkbooks({
  limit = 10,
  cursor,
}: {
  limit?: number;
  cursor: number;
}) {
  const response = await client.get<WorkbookListResult>(
    `workbooks/me?page=${cursor}&limit=${limit}`,
  );
  return response.data;
}
