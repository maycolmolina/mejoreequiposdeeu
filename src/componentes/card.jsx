import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'



const Card = (club) => {
    return (
            <View style={styles.Card}>
                <View style={styles.info}>
                    <View style={{ flexDirection: 'row', margin:2 }}>
                        <Text>nombre: </Text>
                        <Text>{club.nombre}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin:2 }}>
                        <Text>champions ganadas: </Text>
                        <Text>{club.championsGanadas}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin:2 }}>
                        <Text>pais: </Text>
                        <Text>{club.pais}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin:2 }}>
                        <Text>liga: </Text>
                        <Text>{club.liga}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin:2 }}>
                        <Text>mejor jugador: </Text>
                        <Text>{club.mejorJugador}</Text>
                    </View>
                </View>
                <Image
                    style={styles.tamaimg }
                    source={{ uri: club.urlImagen }}
                ></Image>
            </View>
    )
}


const styles = StyleSheet.create({
    tamaimg: {
        width: 150,
        height: 150,
        marginTop:5

    },
    Card: {
        borderWidth: 1, // Ancho del borde
        borderColor: '#908765', // Color del borde
        margin: 10,
        padding: 20,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center',
    },
    info: {
        padding: 5

    }
});
export default Card


