import React, {useContext, useState} from 'react';
import {Text} from 'react-native';

import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, isSubscribe, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Inputs" />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              placeholderTextColor={dividerColor}
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="ingrese su email"
              autoCapitalize="none"
              placeholderTextColor={dividerColor}
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="ingrese su telefono"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
              keyboardAppearance="dark"
            />

            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: colors.text}}>
                Subscribirme{' '}
              </Text>
              <CustomSwitch
                isOn={isSubscribe}
                onChange={value => onChange(value, 'isSubscribe')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 4)} />

            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
