import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getWorkbook, modifyWorkbook } from '../api/workbooks';
import WorkbookWriteEditor from '../components/WorkbookWriteEditor';
import WorkbookWriteHeader from '../components/WorkbookWriteHeader';
import { Error } from '../types';
import { customToast } from '../utils/toastConfig';
import { RootStackParamList } from './RootStack';

type WorkbookWriteParams = RouteProp<RootStackParamList, 'WorkbookWrite'>;

function WorkbookWriteScreen() {
  const { params } = useRoute<WorkbookWriteParams>();
  const id = params.id;
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const {
    data: workbook,
    isLoading,
    isError,
  } = useQuery(['workbook', id], () => getWorkbook(id));

  const { mutate, isLoading: isModifyLoading } = useMutation(modifyWorkbook, {
    onSuccess: () => {
      queryClient.invalidateQueries('myWorkbooks');
      customToast.success('문제집 수정 완료');
      navigation.goBack();
    },
    onError: (error: Error) => {
      customToast.error(error);
      navigation.goBack();
    },
  });

  const onModify = () => {
    if (isModifyLoading) return;
    if (workbook!.title === title) return;
    mutate({ workbookId: workbook!.id, title: { title } });
  };

  useEffect(() => {
    if (!workbook) return;
    setTitle(workbook.title);
  }, [workbook, setTitle]);

  console.log(workbook?.id);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>error occurred!</Text>;
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <WorkbookWriteHeader onModify={onModify} workbook={workbook!} />
      <WorkbookWriteEditor
        workbook={workbook!}
        title={title}
        setTitle={setTitle}
      />
    </SafeAreaView>
  );
}

export default WorkbookWriteScreen;
