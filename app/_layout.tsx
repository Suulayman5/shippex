import 'react-native-reanimated'; // MUST be first

import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack screenOptions={{ headerShown: false }} />
      )}
    </QueryClientProvider>
  );
}
