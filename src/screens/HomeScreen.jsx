import { View, Image, StyleSheet } from "react-native"
import { Text } from "react-native-paper"


export const HomeScreen = () => {

    return (
        <View style={style.caixa}>

            <Text style={style.textoprincipal}>Bem vindo a tela principal</Text>
            <Text style={style.textoSecundario}>Este é um app para IMC, então sente-se e faça seus cálculos</Text>

<Image
   style={style.imagem}
       source={{
        uri: "https://i.ytimg.com/vi/xQPvwYMUwHI/maxresdefault.jpg"
       }}
       />
               
              
        </View>
        )
}

const style = StyleSheet.create({

    textoprincipal: {
        color: 'black',
        textAlign: 'center',
        fontSize: '30px',
        marginTop: '20px'
    },

    textoSecundario: {
        color: 'black',
        textAlign: 'center',
        fontSize: '30px',       
        marginTop: '20px',
    },

    caixa: {
        backgroundColor: 'blue',
        display: 'flex',
        marginTop: '90px',
        marginLeft: '20px',
        marginRight: '20px',
        borderRadius: '20px',

    },  

    imagem: {
        height: "300px",
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",

    }

})
