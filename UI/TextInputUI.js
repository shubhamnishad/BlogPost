import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  TextInput, HelperText
} from 'react-native-paper';

const TextInputUI = ({
  errors = {},
  touched,
  name,
  values,
  setFieldTouched,
  handleChange,
  label,
  keyboardType = 'default',
  helpText,
  handleBlur,
  labelType = 'floatingLabel',
  value,
  error,
  type,
  nof,
  ...rest
}) => {
  const hasError = (error || errors[name]) && touched[name];

  // console.log(`${name}: ${value}`);
  return (
    <View style={styles.wrapper}>
      <TextInput
        // type={type ? type : 'text'}
        multiline = {true}
        numberOfLines = {nof ? nof : 1}
        keyboardType ={type ? type : 'text'}
        style={styles.textInput}
        onBlur={handleBlur(name)}
        label={label}
        onChangeText={handleChange(name)}
        value={value || values[name]}
        error={hasError}
        mode="outlined"
        theme={{ roundness: 10 }}

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
      ) : null }

    </View>
  );
};

export default TextInputUI;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  textInput: {
    backgroundColor: '#fff',
    // borderColor: '#fff',
    // borderBottomColor: '#fff'

  }
});
TextInputUI.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func,
  keyboardType: PropTypes.string,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string
};
