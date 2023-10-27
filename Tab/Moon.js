import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import products from '../data_mockup';

export default function Moon({ navigation }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const { width, height } = Dimensions.get('window');
  const [headerText, setHeaderText] = useState('');
  // const [data, setItem] = useState(['Folder1','Folders2','Folders3']);
  function TextButton({ title, onPress, isSelected }) {
    const buttonColor = isSelected ? 'white' : 'black';
    const backColor = isSelected ? 'black' : 'white';
    const textColor = isSelected ? 'white' : 'black';

    return (
      <TouchableOpacity onPress={() => {
        onPress();
        setSelectedButton(title);
      }} style={{ backgroundColor: backColor, borderRadius: 20, margin: 5, borderWidth: 1, borderColor: buttonColor }}>
        <Text style={{

          fontSize: 12,

          color: textColor,
          
          paddingHorizontal: 20,

        }}>{title}</Text>
      </TouchableOpacity>
    );
  }
  const dataTag = ['มือถือ', 'ทีวี', 'แท็บเล็ต', 'หูฟัง', 'อื่นๆ'];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.productContainer]}
      onPress={() => navigation.navigate('Product', { item: item })}
    >
      <Image
        source={item.image}
        style={{ width: 150, height: 150, borderRadius: 5 }}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>
      <Text>{item.price}</Text>
      <EvilIcons
        name="heart"
        size={24}
        color="red"
        style={{ position: 'absolute', top: 5, right: 5 }}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1  ,backgroundColor:'white'}} showsVerticalScrollIndicator={false}  >
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>

        <TouchableOpacity
          style={{ flex: 0.75 }}
          onPress={() => navigation.navigate('Login')}
        >
        
          <Image
            source={require('../images/11.png')}
            style={{
              position: 'absolute',
              right: 0,
              width: 110,
              height: 40,
            }}
          />
        </TouchableOpacity>



        <View style={{ flex: 0.9 }} >

          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5 }}>
            <Feather name="search" size={20} color="gray" style={{ marginRight: 5 }} />
            <TextInput
              placeholder="Search"
              style={{ flex: 1 }}
            />
          </View>
        </View>


        <View style={{ flex: 0.6 }}>
          <FlatList
            horizontal={true}
            data={dataTag}
            renderItem={({ item }) => (

              TextButton({ title: item, onPress: () => console.log('Button pressed'), isSelected: selectedButton === item })

            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={{ flex: 4 }} >
          <Image
            source={require('../images/ss1.webp')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
            }}
          />

        </View>
        <Text style={{ fontWeight: 'bold' }}> Recommended for you </Text>

        <View style={{ flex: 7.5, alignItems: 'center' }} >

          <FlatList
            data={products}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}


          />

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 50,
    borderRadius: 5,
  },
  productContainer: {
    width: 150,
    margin: 20

  },
});


// 





