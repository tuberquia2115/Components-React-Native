import React, {useContext} from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimated} from '../hooks/useAnimated';

export const Animated101Screen = () => {
  const {position, opacity, fadeIn, FadeOut, startMovingPosition} =
    useAnimated();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.constainer}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <Button
        color={colors.primary}
        title="fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(200);
        }}
      />
      <Button title="fade Out" onPress={FadeOut} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
