import { useState } from "react"
import { COLORS, SIZES, FONTS, SHADOW } from "../constants"
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from "react-native"
import { Button, TextInput } from "react-native-paper"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.textBoxRadius,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10
    },
    allSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.textBoxRadius,
        padding: 15,
        margin: 10
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        color: COLORS.font,
    },
    text: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        color: COLORS.font,
        fontSize: 20,
        marginLeft: 20,
    },
    button: {
        ...SHADOW,
        position: "fixed",
        bottom: 50,
        right: 10,
        lineHeight: 0
    },
    grid: {
        flex: 2,
    },
    item: {
        flex: 1,
        maxWidth: "45%",
        margin: "2.5%",
        alignItems: "center",
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderWidth: 1,
        borderColor: "#818181",
        borderRadius: SIZES.borderRadius,
        fontFamily: FONTS.fontFamily
    }
})

export default function Todopage() {
    const searchTodo = (searchPhrase) => {
        console.log(searchPhrase);
    }
    const viewAll = () => {
        console.log("View all");
    }
    const viewCategory = (category) => {
        console.log("View " + category);
    }
    const createAddTodoModal = () => {
        console.log("create modal");
    }

    const Item = ({ item }) => {
        return <TouchableOpacity style={styles.item} onPress={() => viewCategory(item.category)}>
            {item.icon}<span style={{ fontWeight: "bold" }}>{item.category}</span>
            <Text>{item.quantity}</Text>
        </TouchableOpacity >
    };
    return <View>
        <div>
            <View style={styles.searchSection}>
                <Ionicons name="search" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(searchString) => { searchTodo({ searchString }) }}
                    underlineColorAndroid="transparent"
                />
            </View>
        </div>
        <TouchableOpacity onPress={viewAll}>
            <View style={styles.allSection}>
                <MaterialCommunityIcons name="email-multiple-outline" size={24} color="black" />
                <Text
                    style={styles.text}
                    underlineColorAndroid="transparent"
                >
                    All
                </Text>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20,
                    color: COLORS.font
                }}>18</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.grid}>
            <FlatList
                data={itemData}
                numColumns={2}
                renderItem={Item}
                keyExtractor={(item) => item.alt}
            />
        </View>
        <Ionicons
            style={styles.button}
            name="add-circle-sharp"
            size={48}
            color={COLORS.accent}
            onPress={createAddTodoModal}
        />
    </View>
}

const itemData = [
    {
        icon: (<AntDesign name="calendar" size={24} color="black" />),
        category: 'Today',
        quantity: 3
    },
    {
        icon: (<Foundation name="clipboard-notes" size={24} color="black" />),
        category: 'Coursework',
        quantity: 1
    },
    {
        icon: (<Ionicons name="home" size={24} color="black" />),
        category: 'Housework',
        quantity: 10
    },

];