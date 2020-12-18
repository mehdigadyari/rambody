import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import User from './User'
import styles from './index.style'

const Index = () => {
  const [data, setData] = useState('')

  const getUserInfo = () => {
    let status
    fetch('https://reqres.in/api/users?page=2', {
      method: 'GET',
      headers: {}
    })
      .then((response) => {
        status = response.status
        return response.json()
      })
      .then((responseJson) => {
        if (status === 200) {
          setData(responseJson.data)
          // console.log(responseJson.data)
        }
      })
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <User
            id={item.id}
            fName={item.first_name}
            lName={item.last_name}
            email={item.email}
            image={item.avatar}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
}

export default Index
