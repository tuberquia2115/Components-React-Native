import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimated = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = (duration: number = 300) => {
        Animated.timing(opacity, {
            useNativeDriver: true,
            toValue: 1,
            duration
        }).start()
    }

    const FadeOut = () => {
        Animated.timing(opacity, {
            useNativeDriver: true,
            toValue: 0,
            duration: 300,
        }).start()
    }

    const startMovingPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition)
        Animated.timing(position, {
            useNativeDriver: true,
            duration,
            toValue: 0,
            // easing: Easing.bounce
        }).start()
    }
    return {
        opacity,
        position,
        fadeIn,
        FadeOut,
        startMovingPosition
    }
}
