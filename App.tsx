import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, UIManager } from 'react-native';
import RootStack from './screens/RootStack';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';
import toastConfig from './utils/toastConfig';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

StatusBar.setBarStyle('dark-content');

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
          <Toast position="top" config={toastConfig} />
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
