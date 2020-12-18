/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import axios from 'axios'
import BgView from '../StyledComponent/BgView'
import styles from './index.style'

const SingleUser = ({ route }) => {
  const { id } = route.params
  const [data, setData] = useState('')

  const getUserInfo = () => {
    axios({
      url: `https://reqres.in/api/users/${id}`,
      method: 'GET'
    }).then((response) => {
      if (response.status === 200) {
        setData(response.data.data)
      }
    })
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <BgView>
      <View style={styles.UserSingleRoot}>
        <Image source={{ uri: data.avatar }} style={styles.UserImage} />
        <View style={styles.CharView}>
          <Text style={styles.UserTitle}> {data.first_name} </Text>
          <Text style={styles.UserTitle}> {data.last_name} </Text>
          <Text style={styles.UserTitle}> {data.email} </Text>
        </View>
      </View>
    </BgView>
  )
}

export default SingleUser
