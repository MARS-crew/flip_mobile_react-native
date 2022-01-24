import React from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';
import { getRecentWorkbooks } from '../api/workbooks';
import WorkBookList from './WorkBookList';

function RecentWorkbookList() {
  const { data, isLoading, isError } = useQuery('recentWorkbooks', () =>
    getRecentWorkbooks({ cursor: 1, limit: 3 }),
  );
  if (isLoading) return <Text>loading...</Text>;
  if (isError) return <Text>error occurred!</Text>;
  return <WorkBookList title="🌱 최신 문제집" list={data!.items} />;
}

export default RecentWorkbookList;
