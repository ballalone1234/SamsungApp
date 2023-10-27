import React ,{ useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import data from '../data_mockup';
const ShoppingCart = () => {
const window = Dimensions.get('window');
    function ProductCard({ image, name, color, price , spec }) {
        const [amonut, setAmount] = useState(1);
        return (
            <View style={styles.card}>
                <Image source={image} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.name}>{name} </Text>
                    <Text style={styles.name}>({spec})</Text>
                    <Text style={styles.colorde}>{color}</Text>
                    <Text style={styles.price}>{price}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setAmount(amonut-1)}>
                            <Icon name="minus-circle" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10, fontSize: 18 }}>{amonut}</Text>
                        <TouchableOpacity onPress={() => setAmount(amonut+1)}>
                            <Icon name="plus-circle" size={20}   color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        );
    };
    return (
        
        <View style={{ flex: 1  , marginTop:30}}>
            <View style={{ flex: 1 }}>
                {ProductCard({ image: data[0].image, name: data[0].name, color: data[0].color[0], price: data[0].price ,spec: data[0].size[0].type})}
                {ProductCard({ image: data[3].image, name: data[3].name, color: data[3].color[1], price: data[3].price ,spec: data[3].size[0].type})}
                {ProductCard({ image: data[2].image, name: data[2].name, color: data[2].color[0], price: data[2].price ,spec: data[2].size[0].type})}
                
            </View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 1,

                    backgroundColor: 'black',
                    borderRadius: 20,
                    width: Dimensions.get('window').width,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>ชำระสินค้า</Text>
                </View>
            </TouchableOpacity>
        </View>
     
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
     width: 150,
     height: 150,
        borderRadius: 10,
        marginRight: 10,
    },
    details: {
        flexDirection: 'column',
        flex: 1,
        
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    colorde: {
        fontSize: 14,
        color: 'gray',
    },
    price: {
        fontSize: 14,
        color: 'red',
        paddingVertical: 16,
    },
});
export default ShoppingCart;
