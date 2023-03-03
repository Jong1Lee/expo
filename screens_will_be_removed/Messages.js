// Import safe area context component to ensure the UI is within safe area (mostly only applicable on mobile devices)
import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView } from "react-native";

// Import Expo Status Bar component
import { StatusBar } from 'expo-status-bar';

import styles from '../components/Styles';
import MessageCard from '../components/MessageCard';

import { ActivityIndicator, Text } from "react-native-paper";

import { useEffect } from 'react';
import { signInAnonymously } from "firebase/auth";
import { ref } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';

import { auth, database } from '../Firebase';

export default function Messages(props) {

    const [user, authLoading, authError] = useAuthState(auth);

    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const [snapshots, dbLoading, dbError] = useList(user ? ref(database, '/public') : null);

    return (
        <SafeAreaView style={styles.container}>
            {authLoading || dbLoading || !snapshots ?
                <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                    <Text style={{ margin: 10 }}>loading...</Text>
                </SafeAreaView> :
                <>
                    <Text style={{ margin: 10 }}>{user ? "logged in" : "logged out"}</Text>
                    <ScrollView>
                        {snapshots.flatMap(el => Object.entries(el.val())).sort((a, b) => b[1].created - a[1].created).map((el, i) =>
                            <MessageCard key={el[0]} i={i} iMax={snapshots.flatMap(el => Object.entries(el.val())).length} message={el[1]}></MessageCard>
                        )}
                    </ScrollView>
                </>}
            <StatusBar style="auto" />
        </SafeAreaView>

    )
}