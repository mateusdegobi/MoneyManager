import React, {useState} from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ContextStoreDefault} from './src/context/main';

import Main from './src/pages/main/main';
import Login from './src/pages/Login/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: () => <Text>H</Text>,
      })}>
      <Tab.Screen name="Main" component={Main} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const initialValue = {
    isAuth,
    setIsAuth,
  };

  return (
    <NavigationContainer>
      <ContextStoreDefault.Provider value={initialValue}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </ContextStoreDefault.Provider>
    </NavigationContainer>
  );
}
