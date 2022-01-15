import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { getWorkbook } from '../api/workbooks';
import WorkbookWriteEditor from '../components/WorkbookWriteEditor';
import WorkbookWriteHeader from '../components/WorkbookWriteHeader';
import { RootStackParamList } from './RootStack';

type WorkbookWriteParams = RouteProp<RootStackParamList, 'WorkbookWrite'>;

function WorkbookWriteScreen() {
  const { params } = useRoute<WorkbookWriteParams>();
  const id = params.id;

  const {
    data: workbook,
    isLoading,
    isError,
  } = useQuery(['workbook', id], () => getWorkbook(id));
  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>error occurred!</Text>;
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <WorkbookWriteHeader onSave={() => {}} />
      <WorkbookWriteEditor workbook={workbook!} />
    </SafeAreaView>
  );
}

export default WorkbookWriteScreen;
