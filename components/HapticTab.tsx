import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, PressableProps } from 'react-native';

interface HapticTabProps extends PressableProps {
    children: React.ReactNode;
}

export function HapticTab({ children, onPress, ...props }: HapticTabProps) {
    const handlePress = (event: any) => {
        // Provide haptic feedback on tab press
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.(event);
    };

    return (
        <Pressable onPress={handlePress} {...props}>
            {children}
        </Pressable>
    );
}