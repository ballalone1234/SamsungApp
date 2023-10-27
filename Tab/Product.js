import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView,Dimensions,TouchableOpacity ,FlatList} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function Product ({ navigation ,route }) {
  const { width, height } = Dimensions.get('window');
  const { item } = route.params;
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);
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
  function TextButton2({ title, onPress, isSelected }) {
    const buttonColor = isSelected ? 'white' : 'black';
    const backColor = isSelected ? 'black' : 'white';
    const textColor = isSelected ? 'white' : 'black';

    return (
      <TouchableOpacity onPress={() => {
        onPress();
        setSelectedButton2(title);
      }} style={{ backgroundColor: backColor, borderRadius: 20, margin: 5, borderWidth: 1, borderColor: buttonColor }}>
        <Text style={{

          fontSize: 12,

          color: textColor,
          
          paddingHorizontal: 20,

        }}>{title}</Text>
      </TouchableOpacity>
    );
  }
    return (
        <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.container,
            {
              flexDirection: 'column',
            },
          ]}>
          
          <View style={{ flex: 12, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '80%',
                resizeMode: 'cover',
              }}
            />
          </View>
  
          <View style={{ flex: 1, marginBottom:1 }}>
            <Text style={{ fontSize: 22 , fontWeight:'500'}}> {item.name} </Text>
            </View>
            <View style={{ flex: 1.5,  }}>
            <Text style={{ fontWeight: '400', marginTop:5, fontSize: 18, color: 'red' }}> {item.price}</Text>
          </View>
        
          
          <View style={{ flex: 5}}>
            <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 10 }}>
              {item.description}
            </Text>
          </View>
          <View style={{ flex: 0.75, marginTop:10  ,marginBottom:1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#BEBEBE' }}> AVAILABLE SIZES</Text>
          </View>
  
          <View style={{ flex: 1, marginTop:10  ,marginBottom:10 , alignItems:'center'  }}>
          <FlatList
            horizontal={true}
            data={item.size}
            renderItem={({ item }) => (
              
              TextButton({ title: item.type, onPress: () => console.log('Button pressed'), isSelected: selectedButton === item.type })

            )}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
          
          <View style={{ flex: 0.75, marginTop:10  ,marginBottom:1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#BEBEBE' }}> AVAILABLE COLOR</Text>
          </View>
  
          <View style={{ flex: 1, marginTop:10  ,marginBottom:10 , alignItems:'center'  }}>
          <FlatList
            horizontal={true}
            data={item.color}
            renderItem={({ item }) => (
              
              TextButton2({ title: item, onPress: () => console.log('Button pressed'), isSelected: selectedButton2 === item })

            )}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
  
          <TouchableOpacity
        style={styles.addToCartButton} // แก้เป็น addToCartButton ตามที่คุณต้องการ
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 50,
    borderRadius: 5,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addToCartButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});