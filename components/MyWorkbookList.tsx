import React from 'react';
import { Text } from 'react-native';
import useMyWorkbooks from '../hooks/useMyWorkbooks';
import WorkBookList from './WorkBookList';

function MyWorkbookList() {
  const { data, isLoading } = useMyWorkbooks();

  if (isLoading) return <Text>loading...</Text>;
  return (
    <WorkBookList
      title="👋 나의 문제집"
      list={[...data!.items]
        .filter(workbook => workbook.cards.length)
        .splice(0, 3)}
    />
  );
}

export default MyWorkbookList;
