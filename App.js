import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Moon from './Tab/Moon';
import Login from './Tab/Login';
import Product from './Tab/Product';
import Last from './Tab/Last';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import ShoppingCart from './Tab/Order';

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Moon"
    >
      <Tab.Screen
        name="Moon"
        component={Moon}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
       <Tab.Screen
        name="GG"
        component={ShoppingCart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
      
            //Any custom code here
            navigation.navigate('Cart')
          },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Last"
        component={Last}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Product" component={Product} />
        <Stack.Screen options={{ headerShown: false }} name="Last" component={Last} />
        <Stack.Screen options={{ headerShown: false }} name="Moon" component={Moon} />
        <Stack.Screen options={{ headerShown: false }} name="Cart" component={ShoppingCart} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>


    // <ProductPage />




  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100
  },
  Input: {
    width: 380,
    margin: 'auto',
    marginBottom: 10,
    paddingLeft: 10,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#F0ECD3'
  },
  btn: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#95A6C2',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
