import React, {useContext, useState} from 'react';
import { Switch, Platform} from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (isOn: boolean) => void;
}
const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const { theme: {colors}} = useContext(ThemeContext);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled)
  };
  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
