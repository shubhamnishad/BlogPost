import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonUI = (props) => (
  <Button {...props} theme={{ roundness: 40 }} style={{ ...props.style, ...styles.button }} />
);

export default ButtonUI;
ButtonUI.defaultProps = {
  style: {}
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10
  }
});
