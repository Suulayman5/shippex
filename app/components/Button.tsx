import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { scale, scaledSize } from "../utils";

type ButtonProps = {
  onPress: () => void;
  text: string;
  error: boolean;
  disabled?: boolean;
  loading?: boolean;
//   style?: object;
  textStyle?: object;
};

const Button = ({ onPress, text, loading, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled, loading && styles.loading]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F50C1",
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: scaledSize(10),
    alignItems: "center",
    justifyContent: "center",
  },
    text: {
    color: "#fff",
    fontSize: 14,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  error: {
    backgroundColor: "#ff0000",
  },
  loading: {
    opacity: 0.5,
  },
});
