import { View, Text, Image, TouchableOpacity, Alert, FlatList, StatusBar } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { style } from './style';
import { useState, useEffect } from 'react';

import { ItemStorage, fnStorage } from '@/storage/itensStorage';

//components
import { Input } from '@/components/Input';
import Card from '@/components/Card';

export default function Home() {

    const [placa, setPlaca] = useState('')
    const [car, setCar] = useState<ItemStorage[]>([])

    function adcionarItem() {
        
        const horario = new Date()

        if (!placa.trim()) {
            return Alert.alert('Adicionar', 'Informe a placa do carro para adicionar.')
        }

        const newCar: ItemStorage = {
            id: Math.random().toString(36),
            placa,
            horario
        }

        fnStorage.add(newCar)

        Alert.alert("Adcionando", `O carro da placa ${placa} foi inserido com sucesso!`)

        setCar([...car, newCar])

        setPlaca('')

    }

    async function get() {
        try {
            const response = await fnStorage.get()
            setCar(response)
        } catch (error) {
            Alert.alert("Error", "Não foi possível apagar o item")
        }
    }

    async function checkoutCarro(id: string, horario: Date) {

        const entrada = new Date(horario)
        const saida = new Date()

        //diferença de entrada e saida do veiculo
        const diferenca = saida.getTime() - entrada.getTime()

        
        const horas = Math.ceil(diferenca / (1000 * 60 * 60))

        let newValor = 5

        if (horas > 1) {
            newValor += (horas - 1)
        }

        Alert.alert(
            'Pagamento',
            `O valor a ser pago é de R$ ${newValor},00 reais.`,
            [
                {
                    text: "Cancelar",
                    style: 'cancel'
                },
                {
                    text: "Dar baixa",
                    onPress: () => {
                        trueRemove(id)
                    }
                }
            ]
        )
    }

    async function trueRemove(id: string) {
        await fnStorage.remove(id)
        get()
    }


    useEffect(() => {
        get()
    }, [])

    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" />
            <View style={style.header}>
                <View style={style.headerLogo}>
                    <Image source={require('@/assets/logo.png')} style={style.logo} />
                    <Text style={style.headerText}>
                        BoxTo
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={style.buttonHeader}>
                        <Feather name="grid" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.content}>

                <View style={style.inputContainer}>
                    <Input
                        placeholder="Placa do Carro (Ex: ABC-1234)"
                        onChangeText={setPlaca}
                        value={placa}
                        maxLength={8}
                    />
                    <TouchableOpacity style={style.buttonAdd} onPress={adcionarItem}>
                        <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={style.containerVacancy}>
                    <Text style={style.textVacancy}>
                        Vagas Ativas
                    </Text>
                </View>

                <FlatList
                    data={car}
                    renderItem={({ item }) => (    
                        <Card data={item}
                            onCheckout={() => checkoutCarro(item.id, item.horario)}
                        />
                    )}
                    ListEmptyComponent={() => <Text style={style.empty}>Nenhum item encontrado!</Text>}
                    ItemSeparatorComponent={
                        () =>
                            <View style={style.separator} />
                    }
                    contentContainerStyle={style.listContent}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>
    );
}