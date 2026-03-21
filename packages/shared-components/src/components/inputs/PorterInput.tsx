// packages/shared-components/src/components/inputs/PorterInput.tsx
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import {
  PorterColors,
  PorterSpacing,
  PorterRadius,
  PorterTypography,
} from "../../theme";

export interface PorterInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  multiline?: boolean;
  numberOfLines?: number;
}

export default function PorterInput({
  label,
  placeholder,
  value,
  onChangeText,
  onFocus,
  error,
  disabled = false,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
  multiline = false,
  numberOfLines = 1,
}: PorterInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          disabled && styles.inputDisabled,
          multiline && styles.inputMultiline,
        ]}
        placeholder={placeholder}
        placeholderTextColor={PorterColors.slateGray}
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        onFocus={onFocus}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: PorterSpacing.md,
  },
  label: {
    fontSize: PorterTypography.fontSize.sm,
    fontWeight: PorterTypography.fontWeight.medium,
    color: PorterColors.charcoalBlack,
    marginBottom: PorterSpacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: PorterColors.iceGray,
    borderRadius: PorterRadius.md,
    paddingHorizontal: PorterSpacing.md,
    paddingVertical: PorterSpacing.md,
    fontSize: PorterTypography.fontSize.base,
    color: PorterColors.charcoalBlack,
    backgroundColor: PorterColors.white,
    minHeight: 44,
  },
  inputError: {
    borderColor: PorterColors.error,
  },
  inputDisabled: {
    backgroundColor: PorterColors.iceGray,
    opacity: 0.6,
  },
  inputMultiline: {
    minHeight: 80,
    paddingTop: PorterSpacing.md,
    textAlignVertical: "top",
  },
  errorText: {
    fontSize: PorterTypography.fontSize.xs,
    color: PorterColors.error,
    marginTop: PorterSpacing.xs,
  },
});
