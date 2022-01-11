import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkbookWriteEditor from '../components/WorkbookWriteEditor';
import WorkbookWriteHeader from '../components/WorkbookWriteHeader';

function WorkbookWriteScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <WorkbookWriteHeader />
      <WorkbookWriteEditor />
    </SafeAreaView>
  );
}

export default WorkbookWriteScreen;
