import {
  CreateWorkbookResult,
  WorkbookListResult,
  CreateQuizParams,
  ModifyQuizParams,
  Workbook,
  ModifyWorkbookParams,
} from '../types';
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

export async function createWorkbook(params: { title: string }) {
  const response = await client.post<CreateWorkbookResult>('workbooks', params);
  return response.data;
}

export async function getWorkbook(id: number) {
  const response = await client.get<Workbook>(`workbooks/${id}`);
  return response.data;
}

export async function addQuiz(params: CreateQuizParams) {
  const response = await client.post(
    `workbooks/${params.workbookId}/cards`,
    params.quiz,
  );
  return response.data;
}

export async function modifyQuiz(params: ModifyQuizParams) {
  const response = await client.patch(
    `workbooks/cards/${params.cardId}`,
    params.quiz,
  );
  return response.data;
}

export async function deleteWorkbook(id: number) {
  const response = await client.delete(`workbooks/${id}`);
  return response.data;
}

export async function modifyWorkbook(params: ModifyWorkbookParams) {
  const response = await client.patch(
    `workbooks/${params.workbookId}`,
    params.title,
  );
  return response.data;
}
