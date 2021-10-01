import React, {useContext} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from '../context/theme/ThemeContext';

import {Animated102Screen} from '../screen/Animated102Screen';
import {Animated101Screen} from '../screen/Animated101Screen';
import {AlertScreen} from '../screen/AlertScreen';
import {ChangeThemeScreen} from '../screen/ChangeThemeScreen';
import HomeScreen from '../screen/HomeScreen';
import {InfiniteScrollScreen} from '../screen/InfiniteScrollScreen';
import {PullToRefreshScreen} from '../screen/PullToRefreshScreen';
import ModalScreen from '../screen/ModalScreen';
import {SwitchScren} from '../screen/SwitchScren';
import {SectionListScreen} from '../screen/SectionListScreen';
import {SlidesScreen} from '../screen/SlidesScreen';
import {TextInputScreen} from '../screen/TextInputScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              // backgroundColor: 'white'
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Animated101Screen"
            component={Animated101Screen}
          />
          <Stack.Screen
            name="Animated102Screen"
            component={Animated102Screen}
          />
          <Stack.Screen name="SwitchScren" component={SwitchScren} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen}
          />
          <Stack.Screen
            name="SectionListScreen"
            component={SectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
