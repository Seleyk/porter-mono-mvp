// src/components/buttons/PorterButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { PorterColors, PorterSpacing, PorterRadius, PorterTypography } from '../../theme';

export interface PorterButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
}

export default function PorterButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
}: PorterButtonProps) {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    (disabled || loading) && styles.disabled,
  ];

  const textStyle = [
    styles.baseText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? PorterColors.white : PorterColors.navyBlue} 
          size="small" 
        />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: PorterRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Variants
  primary: {
    backgroundColor: PorterColors.navyBlue,
  },
  secondary: {
    backgroundColor: PorterColors.iceGray,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: PorterColors.navyBlue,
  },
  
  // Sizes
  small: {
    paddingHorizontal: PorterSpacing.md,
    paddingVertical: PorterSpacing.sm,
    minHeight: 36,
  },
  medium: {
    paddingHorizontal: PorterSpacing.lg,
    paddingVertical: PorterSpacing.md,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: PorterSpacing.xl,
    paddingVertical: PorterSpacing.lg,
    minHeight: 52,
  },
  
  disabled: {
    opacity: 0.5,
  },
  
  // Text Styles
  baseText: {
    fontWeight: PorterTypography.fontWeight.semibold,
    textAlign: 'center',
  },
  
  primaryText: {
    color: PorterColors.white,
  },
  secondaryText: {
    color: PorterColors.navyBlue,
  },
  outlineText: {
    color: PorterColors.navyBlue,
  },
  
  smallText: {
    fontSize: PorterTypography.fontSize.sm,
  },
  mediumText: {
    fontSize: PorterTypography.fontSize.base,
  },
  largeText: {
    fontSize: PorterTypography.fontSize.md,
  },
});