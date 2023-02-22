import { Text, View, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default function Formulario2() {


    return (

        <View style={style.container}>
            <Text style={style.texto}>Vamos Calcular!</Text>

            <TextInput
                label={'Peso(kg)'}
                style={style.input}
                
            />
            <Text style={style.info}>Coloque suas informações, cartão de crédito opcional</Text>
            <TextInput
                label={'Altura(M)'}
            
                style={style.input}
            />

            <Button label='calcular'
                style={{ marginTop: 15, width: 200, marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'purple' }}
                icon='send'
                mode='contained'
            >Bora calcula</Button>

 

            <Text style={style.Result}>Resultado:</Text>
            <TextInput disabled style={style.Resultinput} />

            <Image
                source={{
                    uri: "https://picsum.photos/300/300",
                }}
            />

        </View>



    )
}

const style = StyleSheet.create({

    texto: {
        textAlign: 'center',
        color: 'black',
        marginTop: '50px',
        fontSize: '30px'
    },

    input: {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',

    },

    Result: {
        marginTop: '30px',
        marginRight: '100px',
        marginLeft: '100px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px'
    },

    Resultinput: {
        display: 'flex',
        width: '150px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    container: {
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    info: {
        fontSize: '15px',
        marginTop: '10px',
        backgroundColor: 'purple',
        color: 'white',
        display: 'flex',
        borderRadius: '15px',
        alignItems: "center",
        height: '40px',

    }
})
