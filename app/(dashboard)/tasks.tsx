import { View, Text, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const snapshot = await getDocs(collection(db, 'tasks'));
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchTasks();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <Button title="Add Task" onPress={() => console.log('Add Task')} />
    </View>
  );
}
