// app/(tabs)/app.tsx
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { useLoader } from '../../context/LoaderContext';
import { useAuth } from '../../context/AuthContext';

export default function AppScreen() {
  const [tasks, setTasks] = useState<string[]>([
    'Morning Jog',
    'Read 20 pages',
    'Meditation',
  ]);
  const { showLoader, hideLoader } = useLoader();
  const { user } = useAuth();

  const handleAddTask = () => {
    showLoader();
    setTimeout(() => {
      setTasks([...tasks, `New Task ${tasks.length + 1}`]);
      hideLoader();
    }, 500);
  };

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-purple-400 to-pink-300 p-4">
      <Text className="text-3xl font-bold text-white mb-4">
        Hello, {'Sunshine'}! 🌞
      </Text>

      <View className="bg-white rounded-2xl p-4 shadow-md">
        <Text className="text-xl font-semibold mb-2">Your Tasks:</Text>
        {tasks.map((task, idx) => (
          <Text key={idx} className="text-gray-700 text-lg mb-1">
            • {task}
          </Text>
        ))}

        <Pressable
          onPress={handleAddTask}
          className="mt-4 bg-purple-500 px-4 py-2 rounded-full shadow-lg"
        >
          <Text className="text-white font-bold text-center text-lg">
            + Add Task
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
