import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScren = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const { isActive, isHappy, isHungry } = state;
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({ ...state, [field]: value });
  };
  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="SWITCHES" />

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>IsActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={{ ...styles.switchText, color: colors.text }}>
        {JSON.stringify(state, null, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
