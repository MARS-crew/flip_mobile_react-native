import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootStack from './screens/RootStack';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import toastConfig from './utils/\btoastConfig';
import { RecoilRoot } from 'recoil';

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
