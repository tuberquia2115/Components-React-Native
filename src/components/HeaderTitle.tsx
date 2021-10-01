import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    marginBottom?: number;
}
export const HeaderTitle = ({
    title,
    marginBottom = 10,
}: Props) => {
    const { top: marginTop } = useSafeAreaInsets();
    const { theme: {colors}} = useContext(ThemeContext);
    return (
        <View style={{ marginTop, marginBottom }}>
            <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
        </View>
    );
};
