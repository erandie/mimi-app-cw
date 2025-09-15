import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Slot />
    </View>
  );
}
