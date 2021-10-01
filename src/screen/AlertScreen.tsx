import React from 'react';
import {View, Button, Alert} from 'react-native';

import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  
  const showAlert = () => {
    Alert.alert('Titulo', 'Mensaje de la alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   '¿Está Seguro?',
    //   'esta apción no se puede revertir',
    //   (value: string) => console.log('info', value),
    //   'plain-text',
    //   'hola mundo',
    //   'decimal-pad',
    // );

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings', 
      (value) => console.log(value),
      
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'password',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};
