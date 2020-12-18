import React from 'react'
import { View } from 'react-native'
import styles from './index.style'
import BodyText from '../StyledComponent/Text/BodyText'

export default function Index() {
  return (
    <View style={styles.root}>
      <View style={styles.centerMenu}>
        <BodyText>Rambody</BodyText>
      </View>
    </View>
  )
}
