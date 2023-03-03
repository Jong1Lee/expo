import { Button, TextInput, ActivityIndicator, Text } from "react-native-paper";

// Import safe area context component to ensure the UI is within safe area (mostly only applicable on mobile devices)
import { SafeAreaView } from "react-native-safe-area-context";

// Import Expo Status Bar component
import { StatusBar } from 'expo-status-bar';
import styles from "../components/Styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useEffect } from 'react';
import { signInAnonymously } from "firebase/auth";
import { ref, push, child, serverTimestamp } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';

import { auth, database } from '../Firebase';

export default function Add() {

    const [user, authLoading, authError] = useAuthState(auth);

    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const [text, setText] = useState("");

    const navigation = useNavigation();

    const handleOnPress = () => {
        push(child(user ? ref(database) : null, `/public/${user.uid}`), {
            type: 'text',
            created: serverTimestamp(),
            modified: serverTimestamp(),
            message: text,
            content: ""
        })
        setText("");
        navigation.navigate('Home', { screen: 'Messages' });
    }

    return (
        <SafeAreaView style={styles.container}>
            {authLoading ?
                <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                    <Text style={{ margin: 10 }}>loading...</Text>
                </SafeAreaView> :
                <>
                    <TextInput
                        label="Message"
                        value={text}
                        onChangeText={text => setText(text)}
                        onKeyPress={({ key }) => key === 'Enter' ? handleOnPress() : null}
                        style={{ margin: 10 }}></TextInput>
                    <StatusBar style="auto" />
                    <Button icon="send" mode="contained" style={{ margin: 10 }}
                        onPress={handleOnPress}
                    >send</Button>
                </>
            }
        </SafeAreaView>
    )
}