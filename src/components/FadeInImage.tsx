import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Animated,
    ActivityIndicator,
    StyleProp,
    ImageStyle,
} from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimated } from '../hooks/useAnimated';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
    const { opacity, fadeIn } = useAnimated();
    const [isLoading, setIsLoading] = useState(true);
    const { theme: {colors}} = useContext(ThemeContext);
    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading && (
                <ActivityIndicator
                    size={30}
                    color={colors.primary}
                    style={{ position: 'absolute' }}
                />
            )}

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...(style as any),
                    opacity,
                }}
            />
        </View>
    );
};

export default FadeInImage;
