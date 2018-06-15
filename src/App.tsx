import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading, /* Asset, Font, */ Constants } from 'expo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MaterialIcons } from '@expo/vector-icons'
//import { version as reactNativeVersion } from './../node_modules/react-native/package.json'

export default class App extends React.Component<any, any> {
  state = {
    isLoadingComplete: false,
  }

  async componentWillMount() {
    console.log('Expo', Constants)
    //console.log('React Native Version: ', reactNativeVersion)

    /* const [
      ignoredAssets, // eslint-disable-line no-unused-vars
      ignoredFonts, // eslint-disable-line no-unused-vars
    ] = await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in AppHomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]); */
    this.setState({
      isLoadingComplete: true,
    })
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Icon name="book" size={30} color="#900" />
        <MaterialIcons name="developer-board" size={32} color="green" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
