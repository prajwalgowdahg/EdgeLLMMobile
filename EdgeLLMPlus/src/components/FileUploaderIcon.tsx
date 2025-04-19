import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import fileUpload from "../images/fileUpload.png";

const FileUploaderButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={fileUpload} style={styles.icon} resizeMode="contain" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 24,
    backgroundColor: "#f7f7f8",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e1e1e1",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default FileUploaderButton;
