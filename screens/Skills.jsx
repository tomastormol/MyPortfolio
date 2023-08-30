import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import data from '../data'
import CustomModal from '../components/CustomModal'

export default function Skills() {

    const [currentIndex, setCurrentIndex] = useState(null);

    return (
        <View
            style={styles.container}>
            <CustomModal />
            {data.map(({ bg, color, category, subCategories }, index) => {
                return (
                    <TouchableOpacity key={category} onPress={() => {
                        setCurrentIndex(index === currentIndex ? null : index)
                    }}
                        style={styles.cardContainer} activeOpacity={0.8}>
                        <View style={[styles.card, { backgroundColor: bg }]}>
                            <Text style={[styles.heading, { color }]}>{category}</Text>
                            {index === currentIndex && (
                                <View style={styles.subCategoriesList}>
                                    {subCategories.map(subCategory => (
                                        <Text key={subCategory} style={[styles.body, { color }]}>
                                            {subCategory}
                                        </Text>
                                    ))}
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    cardContainer: {
        flexGrow: 1,

    },
    card: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.2
    },
    heading: {
        fontSize: 28,
        fontWeight: '900',
        letterSpacing: -1,
    },
    body: {
        fontSize: 20,
        lineHeight: 20 * 1.5,
        textAlign: 'center',
    },
    subCategoriesList: {
        marginTop: 15
    }
})