import { Ionicons } from '@expo/vector-icons';
import { SymbolScale, SymbolWeight } from 'expo-symbols';
import React from 'react';

interface IconSymbolProps {
    name: keyof typeof Ionicons.glyphMap;
    size?: number;
    color?: string;
    weight?: SymbolWeight;
    scale?: SymbolScale;
}

export function IconSymbol({
    name,
    size = 24,
    color = '#000',
    weight = 'regular',
    scale = 'default'
}: IconSymbolProps) {
    return (
        <Ionicons
            name={name}
            size={size}
            color={color}
        />
    );
}