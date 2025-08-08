import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { scaledSize } from '../utils';
import { isEmpty, isNil } from 'lodash';

type InputFieldProps = {
  icon?: React.ReactNode;
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  touched?: boolean;
  error?: string;
  onBlur?: () => void;    
};

const InputField: React.FC<InputFieldProps> = ({
  icon,
  onChangeText,
  onBlur,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  touched,
  error
}) => {
  const showError = touched && !isNil(error);

  return (
    <>    
      <View style={[
        styles.container,
        showError && styles.errorBorder,
        !showError && !isEmpty(value) && styles.successBorder
      ]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize || 'none'}
        />
      </View>
      {showError && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
}

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scaledSize(1),
    borderColor: '#ccc',
    borderRadius: scaledSize(8),
    paddingHorizontal: scaledSize(12),
    backgroundColor: '#F4F2F8',
    height: scaledSize(50),
  },
  input: {
    flex: 1,
    fontSize: scaledSize(16),
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
  icon: {
    marginRight: scaledSize(8),
  },
  successBorder: { 
    borderColor: '#2F50C1',
  },
  errorBorder: {
    borderColor: '#ff0000',
  },
  errorText: {
    fontSize: scaledSize(12),
    color: '#ff0000',
    marginTop: scaledSize(4),
  }
});
