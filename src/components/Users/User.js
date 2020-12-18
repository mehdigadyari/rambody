/* eslint-disable no-console */
import React from 'react'
import { View, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import styles from './index.style'

const User = ({ id, fName, lName, email, image }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.UserRoot}>
      <Image source={{ uri: image }} style={styles.UserImage} />
      <View style={styles.CharView}>
        <Text style={styles.UserTitle}> {fName} </Text>
        <Text style={styles.UserTitle}> {lName} </Text>
        <Text style={styles.UserTitle}> {email} </Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="User Profile"
          type="clear"
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('userProfile', { id })}
        />
      </View>
    </View>
  )
}

export default User
