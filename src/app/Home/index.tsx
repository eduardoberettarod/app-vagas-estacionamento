import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { style } from './style';
import { useState } from 'react';

import { ItemStorage, fnStorage } from '@/storage/itensStorage';

//components
import { Input } from '@/components/Input';
import Card from '@/components/Card';

export default function Home() {

    const [carro, setCarro] = useState('0')
    const [placa, setPlaca] = useState('')

    const horario = new Date()


    function adcionarItem() {
        if (!placa.trim()) {
            return Alert.alert('Adicionar', 'Informe a placa do carro para adicionar.')
        }

        const newItem = {
            id: Math.random().toString(36),
            placa,
            horario
        }

        fnStorage.add(newItem)

        Alert.alert("Adcionando", `O item ${description} foi adicionado!`)

        setItens([...itens, newItem])

        setDescription('')

    }

    return (
        <View style={style.container}>
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
                    <TouchableOpacity style={style.buttonAdd}>
                        <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={style.containerVacancy}>
                    <Text style={style.textVacancy}>
                        {hoje}
                    </Text>
                    <Text style={style.countVacancy}>
                        {carro} Carros
                    </Text>
                </View>

                <Card />

            </View>
        </View>
    );
}