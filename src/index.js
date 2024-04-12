import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Quiz = () => {
    const navigation = useNavigation()

    return(
    <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'world-affairs'})}
            >
            <Text style={styles.categoryTitle}>World Affairs</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'science'})}
            >
            <Text style={styles.categoryTitle}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'technology'})}
            >
            <Text style={styles.categoryTitle}>Computer Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'sports'})}
            >
            <Text style={styles.categoryTitle}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'literature'})}
            >
            <Text style={styles.categoryTitle}>Literature</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'geography'})}
            >
            <Text style={styles.categoryTitle}>Geography</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'movies'})}
            >
            <Text style={styles.categoryTitle}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => navigation.navigate('Playground', {category: 'music'})}
            >
            <Text style={styles.categoryTitle}>Music</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6FA'
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#E6E6FA'
    },
    category: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#c5a2f2',
        shadowColor: '#1d043d',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryTitle:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'#000000'
    }
  });