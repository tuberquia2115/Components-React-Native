import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';



export const ItemSeparator = () => {
  const { theme: {dividerColor}} = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: dividerColor,
        marginVertical: 8,
      }}
    />
  );
};
