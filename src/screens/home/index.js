import React from 'react';
import {View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import BgImage from '../../files/img/bg.jpeg';
import CustomButton from '../../components/custom-button';
import ButtonText from '../../components/button-text';
import CustomInput from '../../components/custom-input';

const image = { uri: "https://reactjs.org/logo-og.png" };

const WelcomeText = () => {
  return (
    <View style={styles.topTextContainer}> 
      <View style={styles.roofTopView}> 
        <Text style={styles.roofTopText}> 
          The Roof Top 
        </Text>
      </View>
      <View style={styles.roofTopView}> 
        <Text style={styles.lifeStyleText}> 
          Lifestyle Gym
        </Text>
      </View>
    </View>
  )
}

const EnterNameButton = () => {
  return (
    <View style={styles.inputContainer}> 
        <CustomButton 
        // onPress={handleSubmit} 
        // loading={isSubmitting}
        space={'20px'} 
        uppercase={'true'} 
        width={'330px'} 
        color={'#9e6d19'} 
        bgcolor={'#d9d9d9'} 
        box-shadow={'10px'}
        radius={'10px'}
        >
            <ButtonText weight={'bold'}>{'Enter'}</ButtonText>
      </CustomButton>
    </View>
  )
}

const NameForm = () => {
  return (
    <View style={styles.inputContainer}> 
      <CustomInput 
        // onChangeText={text => handleChange({ fullName: text })}
        // value={fullName}
        placeholder={'Enter Name'}
        bgcolor={'white'}
        space={'20px'} 
        placeholderTextColor={'black'} 
        width={'330px'} 
        radius={'20px'} 
        border={'transparent'} 
        // underline={'white'} 
        txtcolor={'black'} 
      />
    </View>
  )
}

const HomeScreen = () => {
  return (
    <View style={styles.container}> 
      <ImageBackground
        source={BgImage}
        style={styles.image}
        blurRadius={25}
      >
        {/* <StatusBar hidden /> */}
        <WelcomeText />
        <NameForm />
        <EnterNameButton />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column"
  }, 
  inputContainer: {
    paddingLeft: 20,
    justifyContent: "center",
    marginTop: 30,
  },
  image: {
    flex: 1, 
    resizeMode: "cover", 
    width: null, 
    height: null, 
    // justifyContent: "center"
  },
  text: {
    color: "white", 
    fontSize: 42, 
    fontWeight: "bold", 
    textAlign: "center", 
    backgroundColor: "#000000a0"
  }, 
  welcomeText: {
    textAlign: "center", 
    fontWeight: "bold",
    fontSize: 30,
  }, 
  roofTopText: {
    textAlign: "center", 
    fontSize: 25,
    color: '#9e6d19',
  },
  lifeStyleText: {
    textAlign: "center", 
    fontSize: 30,
    fontWeight: "bold", 
    color: '#192617',
  },
  topTextContainer: {
    paddingTop: 80,
  }, 
  roofTopView: {
    marginLeft: 60, 
    marginRight: 60,
    marginTop: 15,
  },
  buttonView: {
    backgroundColor: '#3c00ff',
    justifyContent: "center", 
  }
})

export default React.memo(HomeScreen)