import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, Button, Dimensions, ImageBackground, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';

export default class LandingMain extends Component {

    clicked = () => {
        Actions.Homepage();
    }
    
    componentDidMount() {
        AsyncStorage.getItem('email')
        .then((value) => console.log(value))
        .catch((e) => console.log(e) )
    }

    render() {
        return (
            <SafeAreaView style = {{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#0a0a0a',
                paddingTop: Platform.OS == "android" ? 50 : 0
            
            }}>
                
                {/* <View style = {{position: 'absolute', width: '100%', height: '100%',}}>
                <Image style = {{ alignSelf: 'flex-end',width: '100%', height: '70%' }} source = {require('../images/circles.png')}/>
                </View> */}
                {/* <View style = {{ position: 'absolute', right: -200, top: -300, width: '100%', height: '100%', transform: [{ rotate: '45deg'}], borderColor: 'white',}}>
                    <View style = {{
                        position: 'absolute',
                        height: 500, 
                        width: 500,
                        borderRadius: 250,
                        // top: 50,
                        right: 50,
                        backgroundColor: '#172123',
                        opacity: 0.1
                    }}></View>
                    <View style = {{
                        position: 'absolute',
                        height: 600, 
                        width: 600,
                        right: 25,
                        borderRadius: 300,
                        // top: 40,
                        backgroundColor: '#161C1D',
                        opacity: 0.3
                    }}></View>
                    <View style = {{
                        position: 'absolute',
                        height: 700, 
                        width: 700,
                        right: 0,
                        // top: 22,
                        borderRadius: 350,
                        backgroundColor: '#4ACDF4',
                        opacity: 0.09
                    }}></View>
                </View> */}
                <View style = {{marginTop: Dimensions.get('window').height/24}}>
                    <Image source = {require("../images/logo.png")} style = {{width: 160, height: 130, alignSelf: 'center'}}/>
                    <Image source = {require('../images/logo1.png')} style = {{marginTop: 35, width: 259, height: 190, alignSelf: 'center'}}>
                    </Image>
                    <Text 
                        style = {{
                                fontFamily: 'poppinsSemiBold', 
                                color: 'white', 
                                fontSize: 18, 
                                textAlign: 'center',
                                marginTop: 40,
                                zIndex: 1
                            }} >
                            Welcome to BloomBrain!
                    </Text>
                    <Text 
                        style = {{
                            fontFamily: 'poppinsMedium', 
                            color: 'white', 
                            fontSize: 15, 
                            textAlign: 'center', 
                            // marginTop: 15
                        }}>A one - stop learning platform for your kids
                    </Text>
                    <TouchableOpacity style = {{
                        width: 345,
                        height: 53,
                        backgroundColor: '#4ACDF4',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: Platform.OS == "android" ? 50 : 40,
                        borderRadius: 11
                    }}
                        onPress = { () => Actions.Signin() }
                    >
                        <Text style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 21,
                            color: 'white',
                            justifyContent: 'center'
                        }}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{
                        width: 345,
                        height: 53,
                        borderRadius: 11,
                        borderWidth: 2, 
                        borderColor: '#4ACDF4',
                        alignSelf: 'center',
                        marginTop: 13,
                        justifyContent: 'center'
                    }}
                    onPress = { () => Actions.Register() }
                    >
                        <Text style = {{
                             textAlign: 'center',
                             fontFamily: 'poppinsSemiBold',
                             fontSize: 22,
                             color: 'white',
                        }}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{
                        alignSelf: 'center',
                        marginTop: 45,
                        justifyContent: 'center'
                    }}>
                        <Text style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 14,
                            color: 'white',
                            // borderBottomWidth: 1,
                            // borderBottomColor: 'white',
                            // paddingBottom: 5,
                            // borderWidth: 1,
                            textDecorationLine: 'underline',
                            textDecorationStyle: "solid",
                            marginVertical: 0
                            // marginBottom: -1,
                        }}>Learn More</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}