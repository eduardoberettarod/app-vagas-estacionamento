import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './style';
import Feather from '@expo/vector-icons/Feather';


type ItemData = {
    placa: string,
    horario: Date
}

type Props = {
    data: ItemData,
    onCheckout?: () => void
}



export default function Card({ data, onCheckout }: Props) {
    const newDate = new Date(data.horario)
    const horas = String(newDate.getHours()).padStart(2, '0');
    const minutos = String(newDate.getMinutes()).padStart(2, '0');
    
    const horaFormatada = `${horas}:${minutos}`;


    return (
        <View style={style.card}>
            <View style={style.container}>

                <Text style={style.plate}>
                    {data.placa}
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Feather name="clock" size={16} color="black" />
                    <Text style={style.text}>
                        Entrada: {horaFormatada}
                    </Text>
                </View>

            </View>
            <View style={style.footer}>
                <TouchableOpacity style={style.button} onPress={onCheckout}>
                    <Text style={style.buttonText}>
                        Checkout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}