import React from 'react';
import { Text, View } from 'react-native';

import { Footer, FooterTab, Button, Icon } from 'native-base';

import { TabNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Favorites from './Components/Favorites/Favorites';

const App = TabNavigator({
  HomeScreen: { screen : HomeScreen },
  Favorites: { screen : Favorites }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate('HomeScreen')}
            >
            <Icon name = 'home' />
            <Text>Home</Text>
          </Button>

          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate('Favorites')}
            >
            <Icon name = 'heart' />
            <Text>Favorites</Text>
          </Button>

        </FooterTab>

      </Footer>
    )
  }
})

export default App;
