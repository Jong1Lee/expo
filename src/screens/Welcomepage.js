import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    },
    header: {
        ...FONTS.h1_semiBold,
        color: COLORS.secondary,
        textAlign: "center",
        fontWeight: 100,
        fontSize: 36,
        marginTop: 60,
        marginBottom: 20
    },
    imageWrapper: {
        resizeMode: 'contain',
        height: 199,
        width: "100%",
        marginTop: SIZES.padding,
        marginBottom: 60
    },
    textInput: {
        fontFamily: 'Poppins',
        fontSize: 13,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.secondary,
        height: 42,
        paddingLeft: 15,
        width: "100%",
        color: COLORS.primary,
        marginTop: SIZES.padding
    },
    button: {
        ...SHADOW,
        marginTop: 40,
        backgroundColor: COLORS.accent,
        height: 42,
        width: "100%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: 'Poppins',
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: 15,
    },
    horizontalLineTextWrapper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: 30
    },
    horizontalLine: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        height: "1px",
        marginLeft: 20,
        marginRight: 20
    },
    smallText: {
        fontFamily: 'Poppins',
        color: COLORS.secondary,
        fontSize: 12,
        marginLeft: 20,
        marginRight: 20
    },
    signupText: {
        fontFamily: 'Poppins',
        color: COLORS.font,
        fontSize: 12,
        marginTop: 30,
        textAlign: "center",
    },
    inlineClickAble: {
        color: COLORS.secondary,
        fontWeight: "bold"
    }
})

const logo = require('../../assets/logo.png');

export default function Welcomepage() {
    const navigation = useNavigation();
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);

    const [fontsLoaded] = useFonts({
        'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    const validateLoginAttempt = () => {
        return email && password;
    }
    const login = () => {
        console.log(email);
        if (!validateLoginAttempt()) {
            alert("Invalid Login Attempt!");
            return;
        }
        navigation.navigate('To do');
    }
    const signUp = () => {
        console.log('Sign Up Function');
    }
    if (!fontsLoaded) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.header}>To Do Mate</Text>
        <Image
            style={styles.imageWrapper}
            source={logo}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            placeholderTextColor={COLORS.font}
            onChangeText={text => setEmail(text)}
            value={email} />
        <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.font}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            value={password} />
        <Button
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={login}
        >
            Login
        </Button>
        <div style={styles.horizontalLineTextWrapper}>
            <div style={styles.horizontalLine} />
            <p style={styles.smallText}>Or</p>
            <div style={styles.horizontalLine} />
        </div>
        <Text style={styles.signupText}>You don't have an account ? &nbsp;
            <Text style={styles.inlineClickAble} onPress={signUp}>
                Sign up
            </Text>
        </Text>
    </View>
}