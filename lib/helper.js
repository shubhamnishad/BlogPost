import {  ToastAndroid } from "react-native";
export const showToastWithGravity = (message) => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};