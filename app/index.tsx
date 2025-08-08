import { logowhite } from "@/assets/images/image-exports";
import { useRouter } from "expo-router";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { scaledSize } from "./utils";
// import 'react-native-reanimated';

export default function Index() {
  const router = useRouter()
   return (
     <View style={styles.container}>
       <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex:1, }}>
         <Image source={logowhite} style={{ width: 24, height: 24 }} />
         <Text style={{ fontSize: 18, fontWeight: "700", color: "#ffffff" }}>
           SHIPPEX
         </Text>
       </View>
             <TouchableOpacity style={styles.button} onPress={()=> router.push('/(auth)/login')}>
                 <Text style={{color: '#2F50C1', fontSize: 14}}>Login</Text>
             </TouchableOpacity>
     </View>
   );
}
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#2F50C1",
     justifyContent: "flex-end",
     alignItems: "center",
     paddingBottom: 60,
     paddingHorizontal: 20
   },
   button: {
   backgroundColor: "#ffffff",
     width: "100%",
     height: 50,
     padding: 10,
     borderRadius: scaledSize(10),
     alignItems: "center",
     justifyContent: "center",
     marginHorizontal: 20,
   },
   buttonText: {
     color: "#2F50C1",
     fontWeight: "bold",
     fontSize: 16,
   },
 });

