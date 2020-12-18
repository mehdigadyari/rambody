import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    padding: 10
  },
  UserRoot: {
    height: 150,
    backgroundColor: '#131a21',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3d495caa',
    flexDirection: 'row',
    alignItems: 'center'
  },
  UserSingleRoot: {
    height: 200,
    backgroundColor: '#131a21',
    marginTop: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF5722',
    flexDirection: 'row',
    alignItems: 'center'
  },
  UserImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10
  },

  UserTitle: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 15,
    paddingBottom: 7
  },
  buttonView: {
    position: 'absolute',
    right: 5,
    bottom: 0
  },
  buttonTitle: {
    fontSize: 14,
    color: theme.palette.secondary
  }
})

export default styles
