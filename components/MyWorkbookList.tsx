import React from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';
import { getMyWorkbooks } from '../api/workbooks';
import WorkBookList from './WorkBookList';

function MyWorkbookList() {
  const { data, isLoading, isError } = useQuery('myWorkbooks', () =>
    getMyWorkbooks({ cursor: 1, limit: 3 }),
  );

  if (isLoading) return <Text>loading...</Text>;
  if (isError) return <Text>error occurred!</Text>;
  return <WorkBookList title="👋 나의 문제집" list={data!.items} />;
}

export default MyWorkbookList;
