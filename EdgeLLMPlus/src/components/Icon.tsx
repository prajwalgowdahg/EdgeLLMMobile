import React, { useState } from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import globe from "../images/globe.png";

const GlobeIcon = ({ onPress }: { onPress?: () => void }) => {
  const [enabled, setEnabled] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const handlePress = () => {
    setEnabled((prev) => !prev); // Toggle the enabled state
    if (onPress) onPress(); // Call the onPress callback if provided
  };

  return (
    <Pressable
      onPressIn={() => setHighlighted(true)}
      onPressOut={() => setHighlighted(false)}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        (pressed || highlighted) && styles.highlighted,
        !enabled && styles.disabled,
      ]}
    >
      <Image
        source={globe}
        style={[styles.icon, !enabled && styles.iconDisabled]}
        resizeMode="contain"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 24, // pill shape
    backgroundColor: "#f7f7f8", // base button background (like ChatGPT)
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e1e1e1",
  },
  highlighted: {
    backgroundColor: "#e0e7ff", // soft blue highlight
  },
  disabled: {
    opacity: 0.4,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconDisabled: {
    tintColor: "#aaa", // optional for greyscale icons
  },
});

export default GlobeIcon;
