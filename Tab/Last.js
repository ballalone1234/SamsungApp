import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function Last({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.container,
            {
              flexDirection: 'column',
              
            },
          ]}>
        
        <View style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={require('../images/11.png')}
              style={{
                width: windowWidth * 0.3,
                height: windowWidth * 0.3,
                borderRadius: windowWidth * 0.15, 
                overflow: 'hidden',
                resizeMode: 'contain',
                alignSelf: 'center', 
              }}
            />
          </View>
  
          <View style={{ flex: 0.5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center',alignItems: 'center' }}> Pita kung</Text>
                 
          </View>
  
          
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginBottom: 5, width: '100%', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                <EvilIcons name="user" size={30} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: 'black' }}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginBottom: 5, width: '100%', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                <EvilIcons name="envelope" size={30} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: 'black' }}>Notifications</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginBottom: 5, width: '100%', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                <EvilIcons name="location" size={30} color="black" style={{ marginRight: 10}} />
                <Text style={{ fontSize: 18, color: 'black' }}>Location</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginBottom: 5, width: '100%', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                <EvilIcons name="lock" size={30} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: 'black' }}>Privacy and Security</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginBottom: 5, width: '100%', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                <EvilIcons name="credit-card" size={30} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: 'black' }}>Payment</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginBottom: 5, width: '100%', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
                <EvilIcons name="gear" size={30} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: 'black' }}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={() => navigation.replace('Login')}
               style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, width: '100%' }}>
                <AntDesign name="logout" size={24} color="black" style={{ marginRight: 10 }} />

                <Text style={{ fontSize: 18, color: 'black' }}>Logout</Text>
              </TouchableOpacity>
            </View>
            </View>
  
          
  
        </View>  
      </SafeAreaView>
    );
}
        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
