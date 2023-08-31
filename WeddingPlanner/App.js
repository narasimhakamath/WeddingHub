import 'react-native-gesture-handler';

import { RootSiblingParent } from 'react-native-root-siblings';

import { NavigationContainer } from '@react-navigation/native';

import AuthenticationNavigator from './src/navigators/AuthenticationNavigator';
import HomeNavigator from './src/navigators/HomeNavigator';


export default function App() {
  return (
    <>
      <RootSiblingParent>
        <NavigationContainer>
          <HomeNavigator/>
        </NavigationContainer>
      </RootSiblingParent>
    </>
  );
}