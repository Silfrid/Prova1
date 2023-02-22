import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"

export const HomeScreen = () => {

    return (
        <View style={style.caixa}>

            <Text style={style.textoprincipal}>Bem vindo a tela principal</Text>
            <Text style={style.textoSecundario}>Este é um app para IMC, então sente-se e faça seus cálculos</Text>

               
              
        </View>
        )
}

const style = StyleSheet.create({

    textoprincipal: {
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
        marginTop: '20px'
    },

    textoSecundario: {
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',       
        marginTop: '20px',
    },

    caixa: {
        backgroundColor: 'purple',
        display: 'flex',
        marginTop: '90px',
        marginLeft: '20px',
        marginRight: '20px',
        borderRadius: '20px',

    },  

})