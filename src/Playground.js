import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'

const Playground = ({ route }) => {
    const [questions, setQuestions] = useState([]);
    const [selectOption, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const { category } = route.params // Extrage categoria din proprietatile rutei

    useEffect(() => {  // Utilizează efectul pentru a apela functia getQuestions la incarcarea componentei
        getQuestions()
    }, [])

    const getQuestions = async () => {
        setSelectedOptions({});
        setShowResults(false);
        const db = firebase.firestore();
        const questionsRef = db.collection('questions');
        const snapshot = await questionsRef.where('category', '==', category).get();
        if (snapshot.empty){
            console.log('No matching documents...');
            return;
        }
        const allQuestions = snapshot.docs.map(doc => doc.data());// Extrage datele din fiecare document din snapshot folosind map() și returnează un array cu aceste date
        setQuestions(allQuestions);
    };

    // Functia pentru gestionarea selectiei optiunii pentru o intrebare
    const handleOptionSelect = (questionIndex, option) => {
        setSelectedOptions({ // Actualizeaza starea optiunilor selectate
            ...selectOption, // Pastreaza optiunile selectate anterior
            [questionIndex]: option, // Actualizeaza optiunea selectata pentru intrebarea cu indexul specificat
        });
    };

    // Funcția pentru gestionarea trimiterii răspunsurilor
    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((question, index) => { // Itereaza prin fiecare intrebare si verifica raspunsul
            if (selectOption[index] === question.correctOption){ // Daca raspunsul este corect
                correctAnswers++; // Se incrementeaza variabila
            }
        });
        setScore(correctAnswers); // Starea scorului se actualizeaza cu numarul de raspunsuri corecte
        setShowResults(true); 

    };

    return (
        <View style={styles.container}>
            <FlatList 
                data={questions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View
                        style={styles.questionsContainer}
                    >
                        <Text style={styles.question}>
                            {item.question}
                        </Text>
                        <TouchableOpacity
                            style={[
                                styles.option,
                                selectOption[index] === 1 && styles.selectedOptions,
                                showResults && item.correctOption === 1 && styles.correctOption,
                                showResults && selectOption[index] === 1 && selectOption[index] !== item.correctOption && styles.wrongOption,
                            ]}
                            onPress={() => handleOptionSelect(index, 1)}
                            disabled={showResults}
                        >
                            <Text>{item.option1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.option,
                                selectOption[index] === 2 && styles.selectedOptions,
                                showResults && item.correctOption === 2 && styles.correctOption,
                                showResults && selectOption[index] === 2 && selectOption[index] !== item.correctOption && styles.wrongOption,
                            ]}
                            onPress={() => handleOptionSelect(index, 2)}
                            disabled={showResults}
                        >
                            <Text>{item.option2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.option,
                                selectOption[index] === 3 && styles.selectedOptions,
                                showResults && item.correctOption === 3 && styles.correctOption,
                                showResults && selectOption[index] === 3 && selectOption[index] !== item.correctOption && styles.wrongOption,
                            ]}
                            onPress={() => handleOptionSelect(index, 3)}
                            disabled={showResults}
                        >
                            <Text>{item.option3}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.option,
                                selectOption[index] === 4 && styles.selectedOptions,
                                showResults && item.correctOption === 4 && styles.correctOption,
                                showResults && selectOption[index] === 4 && selectOption[index] !== item.correctOption && styles.wrongOption,
                            ]}
                            onPress={() => handleOptionSelect(index, 4)}
                            disabled={showResults}
                        >
                            <Text>{item.option4}</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                disabled={showResults}
            >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            { showResults && (
                            <View style={styles.result}>
                                <Text style={styles.resultText}
                                >
                                    You scored {score} out of {questions.length}
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.tryAgainButton}
                                        onPress={getQuestions}
                                    >
                                        <Text
                                            style={styles.tryAgainButtonText}
                                        >
                                            Try Again</Text>
                                    </TouchableOpacity>
                            </View>
                        )}
        </View>
    )
}

export default Playground

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E6E6FA'
    },
    questionsContainer:{
        backgroundColor:'#c5a2f2',
        borderRadius:10,
        marginBottom:20,
        padding:20,
        shadowColor:'#1d043d',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.85,
        elevation: 5,
    },
    question:{
        fontSize: 20,
        fontWeight:'bold',
        marginVertical:10
    },
    option:{
        backgroundColor: '#eee',
        padding:10,
        marginVertical:5,
        borderRadius:5,
    },
    selectedOptions:{
        backgroundColor:'#949494'
    },
    correctOption:{
        backgroundColor:'green'
    },
    wrongOption:{
        backgroundColor:'red'
    },
    submitButton:{
        backgroundColor: 'blue',
        padding:10,
        marginVertical:10,
        borderRadius:5
    },
    submitButtonText:{
        color: '#fff',
        fontSize: 20,
    },
    result:{
        alignItems:'center',
        justifyContent:'center'
    },
    resultText:{
        fontSize: 20,
        fontWeight:'bold',
        marginVertical: 10
    },
    tryAgainButton:{
        backgroundColor:'blue',
        padding:10,
        marginVertical:10,
        borderRadius:5
    },
    tryAgainButtonText:{
        color:'#fff',
        fontSize:20
    }
});
