import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, HelperText } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Checkbox from '@react-native-community/checkbox';

const CheckboxUI = ({
  errors = {},
  touched,
  name,
  values,
  handleChange,
  label,
  helpText,
  handleBlur,
  value,
  setFieldValue,
  error,
  ...rest
}) => {
  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.wrapper}>
      <List.Item
        title={label}
        left={(itemProp) => <Checkbox {...itemProp} value={value} boxType="circle" color={Colors.primary} />}
        onPress={() => setFieldValue(name, !value)}
      />
      {helpText ? (
        <HelperText type="info" visible={helpText}>
          {helpText}
        </HelperText>
      ) : null}
      {hasError ? (
        <HelperText type="error" visible={hasError}>
          {error || errors[name]}
        </HelperText>
      ) : null}
    </View>
  );
};

export default CheckboxUI;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  }
});
