import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, TextInput, Animated, Keyboard, TouchableOpacity, StyleSheet, BackHandler, AsyncStorage,} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Signin extends Component {

    state = {
        padding: new Animated.Value(65),
        email: "",
        pass: "",
        valid: true,
        registered: true,
        notEmpty: true,
    }

    componentDidMount() {

        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );
    }

    componentWillUnmount() {

        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    

    onClickSignin = () => {
        this.setState({registered: true, valid: true, notEmpty: true})
        if(this.state.email == "" || this.state.pass == "") {
            this.setState({notEmpty: false})
        } else {
        let url = 'http://idirect.bloombraineducation.com/idirect/lms/login?email='+this.state.email+'&password='+this.state.pass;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                
                if(responseJson["success"] === 200){
                    AsyncStorage.setItem('email', JSON.stringify(responseJson.email));
                    AsyncStorage.setItem('id', JSON.stringify(responseJson.id));
                    AsyncStorage.getItem('email')
                    .then((value) => {
                        console.log("email" + value)
                    })
                    .catch((e) => console.log(e));
                    Actions.Homepage();
                }
                else if(responseJson["success"] === 203)
                    this.setState({registered: false})
                else if(responseJson["success"] === 205)
                    this.setState({valid: false})
            })
            .catch((error) => {
                this.setState({login: false})
                console.error(error);
            });

        }
    }

    _keyboardDidShow = () => {
        Animated.timing( this.state.padding, { toValue: 0, duration: 100, useNativeDriver: false}).start();
        // this.setState({padding: 80})
    }
    
    _keyboardDidHide = () => {
        Animated.timing( this.state.padding, { toValue: 65, duration: 100, useNativeDriver: false}).start();
        // this.setState({padding: 120})
    }
    

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // borderColor: 'white',
                    // borderWidth: 2,
                    // flexDirection: 'column',
                    backgroundColor: '#0a0a0a',
                    paddingTop: Platform.OS === 'android' ? 20 : 20,
                    // marginTop: this.state.padding
                }}
            >
                <View style = {{marginTop: 30}}>
                    <Image style = {{width: 225, height: 170, alignSelf: 'center',}} source = {require('../images/logo.png')}/>
                    <Animated.View style = {{
                        marginTop: this.state.padding,
                    }}>
                    <Text 
                        style = {{
                            // borderColor: 'white',
                            // borderWidth: 1,
                            // paddingTop: 65,
                            paddingLeft: 22,
                            fontFamily: 'poppinsBold',
                            fontWeight: "800",
                            color: '#4ACDF4',
                            fontSize: 26
                        }}>Hi there!</Text>
                    <Text
                        style = {{
                            marginTop: -5,
                            paddingLeft: 22,
                            fontFamily: 'poppinsMedium',
                            fontWeight: "800",
                            color: 'white',
                            fontSize: 18
                        }}
                    >Nice to see you again.</Text>
                        <View style = {{
                            // flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                            marginTop: 40,
                            // borderColor: "white",
                            // borderWidth: 1,
                        }}>
                            <View style={styles.sectionStyle}>
                                <Image
                                    source= {require("../images/username.png")}
                                    style={styles.imageStyle}
                                />
                                <TextInput
                                    style={{ flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 17, marginLeft: 10, color: 'white'}}
                                    value = {this.state.email}
                                    onChangeText = {(value) => {this.setState({email: value})}}
                                    placeholder="Email"
                                    placeholderTextColor= '#707070'
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.sectionStyle}>
                            <Image
                                source= {require("../images/password.png")}
                                style={styles.imageStyle}
                            />
                            <TextInput
                                style={{flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 17, marginLeft: 10, color: 'white'}}
                                value = {this.state.password}
                                onChangeText = {(value) => {this.setState({pass: value})}}
                                placeholder="Password"
                                placeholderTextColor = '#707070'
                                underlineColorAndroid = "transparent"    
                                secureTextEntry = {true}
                            />
                            </View>
                        </View>
                        <View style = {{marginLeft: 22, paddingTop: -5}}>
                            {this.state.valid == false ? <Text style = {{ textAlign: "left", color: "#4ACDF4", fontFamily: "poppinsSemiBold", fontSize: 12}}>Incorrect Username or Password!</Text>: null}
                            {this.state.registered == false ? <Text style = {{ textAlign: "left", color: "#4ACDF4", fontFamily: "poppinsSemiBold", fontSize: 12}}>User not registered!</Text> : null}
                            {this.state.notEmpty == false ? <Text style = {{ textAlign: "left", color: "#4ACDF4", fontFamily: "poppinsSemiBold", fontSize: 12}}>Email or Password fields can't be empty!</Text> : null}
                        </View>
                        </Animated.View>
                    <View>
                        <Text style = {{
                            fontFamily: "poppinsSemiBold",
                            fontSize: 12,
                            color: 'white',
                            textAlign: 'center',
                            marginTop: !this.state.valid || !this.state.registered || !this.state.notEmpty ? 12: 5,
                            // borderWidth: 1, 
                            // borderColor: 'white'
                        }}>
                        Forgot Password?
                        </Text>
                    </View>
                    <TouchableOpacity style = {{
                        // flex: 1,
                        width: Platform.OS == "ios" ? 330 : 370,
                        height: 53,
                        backgroundColor: '#4ACDF4',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: !this.state.valid || !this.state.registered || !this.state.notEmpty ? 25: 40,
                        borderRadius: 13
                    }}
                        onPress = { this.onClickSignin.bind(this) }
                    >
                        <Text style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 21,
                            color: 'white',
                            justifyContent: 'center',
                        }}>Sign In</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style = {{
                            fontFamily: "poppinsMedium",
                            fontSize: 15,
                            color: 'white',
                            textAlign: 'center',
                            marginTop: 50
                        }}>
                        Don't have an account? <Text

                            onPress = {() => {Actions.Register()}}
                            style = {{
                                fontFamily: "poppinsMedium",
                                fontSize: 15,
                                // color: 'white',
                                textAlign: 'center',
                                // marginTop: -40 ,
                                textDecorationLine: 'underline',
                                textDecorationStyle: "solid",
                                color: "white"
                            }}  
                        >Sign Up
                        </Text>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
    // borderColor: 'white',
    // borderWidth: 2,
    // height: 100,
    // width: Dimensions.get('window').width
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#151515',
    //   borderWidth: 0.5,
    //   borderColor: '#1C1C1C',
      height: 50,
      borderRadius: 15,
      margin: 10,
    //   marginBottom: 3,
    },
    imageStyle: {
    //   padding: 10,
        // borderWidth: 2, 
        // borderColor: 'white',
        margin: 5,
        marginLeft: 20,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export default Signin;