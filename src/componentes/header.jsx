import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from './card'
import repository from '../datos/repository'
import { View, Text } from 'react-native'
import Constants from 'expo-constants'




const Header = () => {
    return (
        <View style={{ paddingTop:Constants.statusBarHeight}}>
            <Text style={styles.title}>mejores equipos de ueropa</Text>
            <FlatList

                contentContainerStyle={{
                    padding: 10,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '100%', flexWrap: 'wrap'
                }}
                data={repository}
                renderItem=
                {
                    ({ item: equipo }) =>
                    (
                        <Card {...equipo} />
                    )
                }
            >
                
            </FlatList>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    title:{
        fontSize:30
    }
});






export default Header