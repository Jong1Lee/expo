// Import React hooks
import { useEffect, useState } from 'react';

// Import Expo Status Bar component
import { StatusBar } from 'expo-status-bar';

import { FlatList, Keyboard, Pressable, ScrollView, TouchableOpacity } from "react-native";

// Import safe area context component to ensure the UI is within safe area (mostly only applicable on mobile devices)
import { SafeAreaView } from 'react-native-safe-area-context';
import { ref } from 'firebase/database'
import { signInWithEmailLink } from 'firebase/auth'

import CatCard from "../components/CatCard";
import styles from '../components/Styles';
import { database } from '../Firebase';
import { View } from 'react-native-web';
import { TextInput } from 'react-native-paper';

export default function ToDoList() {

    const [todos, setTodos] = useState([]);
    const todoRef = ref(database, '/public');

    useEffect(() => {
        signInWithEmailLink(auth, 'test@gmail.com');
        todoRef.orderBy('createdAt', 'desc')
        .onSnapShot(
            querySnapshot => {
                const todoList = [];
                querySnapshot.forEach(doc => {
                    const {heading} = doc.data();
                    todoList.push({
                        id: doc.id,
                        heading
                    })
                })
                setTodos(todoList);
            }
        )
    }, []);


    const deleteTodo = (todos) => {
        todoRef
        .doc(todos.id)
        .delete()
        .then(() => {
            alert("Delete Successfully");
        })
        .catch(error => {
            alert(error);
        })
    }

    const addTodo = () => {
        if (addData && addData.length > 0) {
            const timestamp = firebaseApp.fireStore.FieldValue.serverTimestamp();
            const data = {
                heading: addData,
                createdAt: timestamp
            };
            todoRef
            .add(data)
            .then(() => {
                setAddData('')
                Keyboard.dismiss();
            })
            .catch(error => {
                alert(error);
            });
        }
    }

    return (
        <View style={{flex:1}}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new todo"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddData(heading)}
                    value=""
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TouchableOpacity
                    style={styles.button} 
                    onPress={addTodo}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={todos}
                numColumns={1}
                renderItem={({item}) => (
                    <View>
                        <Pressable
                            style={styles.container}
                            onPress={() => navigation.navigate('Detail', {item})}
                        >
                            <FontAwesome
                                name='trash-o'
                                color='red'
                                onPress={() => deleteTodo(item)}
                                style={styles.todoIcon}
                            />
                            <View style={styles.innerContainer}>
                                {item.heading[0].toupperCase() + item.heading.slice(1)}
                            </View>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    )
}