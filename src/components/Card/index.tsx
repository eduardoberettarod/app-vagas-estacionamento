import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './style';
import Feather from '@expo/vector-icons/Feather';


export default function Card() {


    return (
        <View style={style.card}>
            <View style={style.container}>

                <Text style={style.plate}>
                    FMF-0822
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                    <Feather name="clock" size={16} color="black" />
                    <Text style={style.text}>
                        Entrada: 17:45
                    </Text>
                </View>

            </View>
            <View style={style.footer}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>
                        Checkout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}