import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import MasterLayout from '../screen/MasterLayout'
import UserProfile from '../components/Users/SingleUser'
import BgViewMain from '../components/StyledComponent/BgView'
import Header from '../components/Header'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <BgViewMain>
      <Header />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="masterpage" component={MasterLayout} />
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: 'vertical'
          }}
          name="userProfile"
          component={UserProfile}
        />
      </Stack.Navigator>
    </BgViewMain>
  )
}

export default HomeStackNavigator
