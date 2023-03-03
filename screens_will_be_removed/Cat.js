// Import React hooks
import { useEffect, useState } from 'react';

// Import Expo Status Bar component
import { StatusBar } from 'expo-status-bar';

import { ScrollView } from "react-native";

// Import safe area context component to ensure the UI is within safe area (mostly only applicable on mobile devices)
import { SafeAreaView } from 'react-native-safe-area-context';

import CatCard from "../components/CatCard";
import styles from '../components/Styles';

export default function Cat() {

    // State for list of cat urls
    const [catList, setCatList] = useState([]);

    // Effect for fetching urls from Cat API; only runs once due to [] dependencies
    useEffect(() => {
        (async () => {
            const fetchResult = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            setCatList(await fetchResult.json());
        })()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Map JavaScript array to JSX component */}
                {catList.map((el, i) =>
                    <CatCard key={el.id} cat={el} i={i} iMax={catList.length}></CatCard>
                )}
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}