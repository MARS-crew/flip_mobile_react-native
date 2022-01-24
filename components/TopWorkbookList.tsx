import React from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';
import { getTopWorkbooks } from '../api/workbooks';
import WorkBookList from './WorkBookList';

function TopWorkbookList() {
  const { data, isLoading, isError } = useQuery('topWorkbooks', () =>
    getTopWorkbooks({ cursor: 1, limit: 3 }),
  );

  if (isLoading) return <Text>loading...</Text>;
  if (isError) return <Text>error occurred!</Text>;
  return <WorkBookList title="🔥 인기 문제집" list={data!.items} />;
}

export default TopWorkbookList;
