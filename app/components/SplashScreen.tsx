import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { logo, logoBig } from "@/assets/images/image-exports";

export default function SplashScreen() {
  const [step, setStep] = useState(0); 
  // 0 = small logo, 1 = big logo, 2 = blue page

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),  // small → big
      setTimeout(() => setStep(2), 1600), // big → blue
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <View style={styles.container}>
      {step === 0 && (
        <Image source={logo} style={styles.smallLogo} resizeMode="contain" />
      )}
      {step === 1 && (
        <Image source={logoBig} style={styles.bigLogo} resizeMode="contain" />
      )}
      {step === 2 && <View style={styles.blueOverlay} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  smallLogo: { width: 40, height: 40 },
  bigLogo: { width: 100, height: 100 },
  blueOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "#2F50C1" },
});
