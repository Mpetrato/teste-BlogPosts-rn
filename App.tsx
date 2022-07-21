import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from './src/screens/HomeScreen';
import { BlogListScreen } from './src/screens/BlogListScreen';
import { propsNavigationStack } from './src/Models';

const { Screen, Navigator} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='BlogList' component={BlogListScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

