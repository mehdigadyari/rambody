/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'

export default function Index() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}
