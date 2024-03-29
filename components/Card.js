import React from 'react';
import { View, StyleSheet } from 'react-native';

export default Card = ({ children, style }) => {
    return (
    <View style={{ ...styles.card, ...style }}>{ children }</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: .26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    }
})