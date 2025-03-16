import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'

const Create = ({data, setdata}) => {
    const [coin, setCoin] = useState('')
    const [quantity, setQuantity] = useState('')
    const [isEdit, setIsEdit] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    const handleAddCoin = () => {
        if (coin.trim() && quantity.trim()) {
            setdata([...data, {id: data.length + 1, coin: coin, stock: quantity}]);
            console.log(data);

            setCoin('');
            setQuantity('');
            setIsEdit(false);
        }
    }

    const handleDeleteCoin = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setdata(updatedData);
    }

    const handleUpdateCoin = (item) => {
        setCoin(item.coin);
        setQuantity(item.stock);
        setIsEdit(true);
        setEditItemId(item.id);
    }

    const handleEditCoin = () => {
        if (coin.trim() && quantity.trim()) {
            const updatedData = data.map((item) =>
                item.id === editItemId ? {...item, coin: coin, stock: quantity} : item
            );
            setdata(updatedData);
            setCoin('');
            setQuantity('');
            setIsEdit(false);
            setEditItemId(null);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter Coin Name'
                style={styles.input}
                value={coin}
                onChangeText={(item) => setCoin(item)}
            />
            <TextInput
                placeholder='Enter Quantity'
                style={styles.input}
                value={quantity}
                onChangeText={(item) => setQuantity(item)}
                keyboardType="numeric"
            />
            <Pressable
                style={styles.addButton}
                onPress={isEdit ? handleEditCoin : handleAddCoin}
            >
                <Text style={styles.addButtonText}>{isEdit ? 'Update' : 'Add Coin'}</Text>
            </Pressable>

            <View style={styles.listContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>All Coins in Stock</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={[
                            styles.itemContainer,
                            {backgroundColor: parseInt(item.stock) < 40 ? '#FFCCCC' : '#D7F6BFFF'}
                        ]}>
                            <View style={styles.coinInfo}>
                                <Text style={styles.coinName}>{item.coin}</Text>
                                <Text style={styles.stockLabel}>Stock: <Text style={styles.stockValue}>{item.stock}</Text></Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Pressable style={[styles.actionButton, styles.editButton]} onPress={() => handleUpdateCoin(item)}>
                                    <Text style={styles.buttonText}>Edit</Text>
                                </Pressable>
                                <Pressable style={[styles.actionButton, styles.deleteButton]} onPress={() => handleDeleteCoin(item.id)}>
                                    <Text style={styles.buttonText}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '4%',
        backgroundColor: '#f5f5f5',
    },
    input: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 12,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#24a0ed',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
        elevation: 2,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 4,
        elevation: 2,
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 8,
        marginVertical: 6,
        borderRadius: 10,
        elevation: 1,
    },
    coinInfo: {
        flex: 1,
    },
    coinName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    stockLabel: {
        fontSize: 14,
        color: '#666',
    },
    stockValue: {
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    actionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 70,
    },
    editButton: {
        backgroundColor: '#24a0ed20',
        borderWidth: 1,
        borderColor: '#24a0ed',
    },
    deleteButton: {
        backgroundColor: '#ff634720',
        borderWidth: 1,
        borderColor: '#ff6347',
    },
    buttonText: {
        fontWeight: '600',
    },
})