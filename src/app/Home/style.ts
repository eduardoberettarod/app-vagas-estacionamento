import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191919",
        paddingTop: 64,
        padding: 20
    },
    logo: {
        height: 40,
        width: 40,
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerText: {
        color: '#eeeeee',
        fontSize: 24
    },
    buttonHeader: {
        backgroundColor: '#4EDEA3',
        padding: 15,
        borderRadius: 100
    },
    content: {
        paddingTop: 48,
        flex: 1
    },
    buttonAdd: {
        backgroundColor: '#4EDEA3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 8,
        marginLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        alignItems: 'center'
    },
    containerVacancy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24
    },
    textVacancy: {
        color: '#eee',
        fontSize: 18
    },
    countVacancy: {
        color: '#eee',
        borderRadius: 12
    },
    separator: {
        width: '100%',
        marginVertical: 4
    },
    listContent: {
        paddingTop: 24,
        paddingBottom: 62
    },
    empty: {
        fontSize: 14,
        color: '#808080',
        textAlign: 'center'
    }
});