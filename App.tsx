import './ignoreWarnings'
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from './src/screens/HomeScreen';
import { BlogListScreen } from './src/screens/BlogListScreen';
import { NewPost } from './src/screens/NewPost';
import { ListProvider } from './src/context/ListContext';

const { Screen, Navigator} = createStackNavigator();

export default function App() {
  return (
    <ListProvider>
      <NavigationContainer>
        <Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
          <Screen name='Home' component={HomeScreen}/>
          <Screen name='BlogList' component={BlogListScreen} />
          <Screen name='NewPost' component={NewPost} />
        </Navigator>
      </NavigationContainer>
    </ListProvider>
  );
}

