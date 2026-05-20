import AsyncStrorage from '@react-native-async-storage/async-storage'


const ITENS_STORAGE_KEY = '@listacompras:itens'

export type ItemStorage = {
    id: string,
    horario: Date,
    description: string
}

// função base para consulta de dados
async function get(): Promise<ItemStorage[]> {
    try {
        const storage = await AsyncStrorage.getItem(ITENS_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("ITEM_GET: " + error)
    }
}

// função base para salvar todos os dados
async function save(itens: ItemStorage[]): Promise<void> {
    try {
        await AsyncStrorage.setItem(ITENS_STORAGE_KEY, JSON.stringify(itens))
    } catch (error) {
        throw new Error("ITEM_SAVE: " + error)
    }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
    const itens = await get()
    const updateItem = [...itens, newItem]
    await save(updateItem)
    return updateItem
}


async function clear() {
    try {
        await AsyncStrorage.removeItem(ITENS_STORAGE_KEY)
    } catch (error) {
        throw new Error("ITEM_CLEAR; " + error)
    }
}

async function remove(id: string) {
    const items = await get()
    const updateItens = items.filter((item) => item.id !== id)
    await save(updateItens)
}

export const fnStorage = {
    add,
    get,
    clear,
    remove
}