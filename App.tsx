import 'react-native-gesture-handler';
import React from 'react';
// import {
//   NavigationContainer,
//   DefaultTheme,
//   DarkTheme,
//   Theme,
// } from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: 'strin',
//     //background: 'black',
//     // card: 'strin',
//     // text: 'strin',
//     // border: 'strin',
//     // notification: 'strin',
//   },
// };

const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default App;
