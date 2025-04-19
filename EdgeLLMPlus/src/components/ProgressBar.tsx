import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

interface ProgressBarProps {
  progress: number; // Percentage (0–100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false, // width uses layout (not transform), so set this to false
    }).start();
  }, [progress]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
      <Text style={styles.text}>{Math.round(progress)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    marginVertical: 10,
  },
  bar: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ProgressBar;
