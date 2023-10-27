import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, Text ,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export default function Login({ navigation }) {
 
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('../images/11.png')} // ระบุ path ของรูปภาพที่คุณเพิ่ม
            style={styles.image}
          />
       <TextInput
           placeholder='USERNAME' placeholderTextColor='#888'
     style={[styles.input, styles.roundedInput, { width:  width*0.8  }]} // เพิ่มความยาวของ TextInput
          />
          <TextInput
            placeholder='PASSWORD' placeholderTextColor='#888'
            
            style={[styles.input, styles.roundedInput, { width:  width*0.8  }]} // เพิ่มความยาวของ TextInput
          />
          
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.replace('Home')}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.regButton}
            onPress={() => navigation.replace('Home')}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: width*0.5, // ปรับความกว้างของภาพ
    height: 100, // ปรับความสูงของภาพ
    marginBottom: 20, // ปรับตำแหน่งตามที่คุณต้องการ
   resizeMode : 'contain'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  loginButton: {
    width:width*0.8 ,
    height: 44,
    backgroundColor: '#3949ab', // สีเขียว
    borderRadius: 22, // ความกลมของขอบปุ่ม
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  regButton: {
    width:width*0.8 ,
    height: 44,
    backgroundColor: 'black', // สีเขียว
    borderRadius: 22, // ความกลมของขอบปุ่ม
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', // ตัวหนา
  },
  registerTextContainer: {
    flexDirection: 'row', // จัดเรียงแนวนอน
    marginTop: 10, // ระยะห่างด้านบน

  },
  registerText: {
    fontSize: 16,
    fontWeight: 'bold', // ตัวหนา
    marginLeft: 10, // ระยะห่างด้านซ้าย
  },
    roundedInput: {
    borderRadius: 22, // ความกลมของขอบ TextInput
  },
});
