import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkbookWriteEditor from '../components/WorkbookWriteEditor';
import WorkbookWriteHeader from '../components/WorkbookWriteHeader';
import { RootStackNavigationProp, RootStackParamList } from './RootStack';

type WorkbookWriteScreen = RouteProp<RootStackParamList, 'WorkbookWrite'>;

function WorkbookWriteScreen() {
  const { params } = useRoute<WorkbookWriteScreen>();
  const item = params.item;
  const navigation = useNavigation<RootStackNavigationProp>();
  const [title, setTitle] = useState('');

  const onSave = () => {
    console.log(title);
    navigation.goBack();
  };
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <WorkbookWriteHeader item={item} onSave={onSave} />
      <WorkbookWriteEditor item={item} title={title} setTitle={setTitle} />
    </SafeAreaView>
  );
}

export default WorkbookWriteScreen;
