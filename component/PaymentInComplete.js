import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PaymentInComplete extends Component {

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 40 : 0
                }}
            >
                <View 
                    style = {{
                        flexDirection: 'row',
                        width: '100%',
                        // borderColor: 'white',
                        // borderWidth: 2,
                        backgroundColor: "#101010",
                        alignItems: 'center',
                        height: 60,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                    }}
                >   
                <TouchableOpacity
                    onPress = { () => {Actions.Checkout()} }
                >
                    <Image 
                        style = {{ 
                            width: 22, 
                            height: 22,
                            marginLeft: 20,
                        }}
                        source = {require("../images/back.png")} 
                    />
                    </TouchableOpacity>
                    <Text
                        style = {{
                            color: 'white',
                            fontFamily: 'poppinsMedium',
                            fontSize: 14,
                            textAlign: 'center',
                            width: '78%'
                        }}
                    >Checkout</Text>
                </View>
                <View style = {{
                    // borderColor: 'white',
                    // borderWidth: 2,
                    alignItems: 'center',
                    marginTop: 140
                }}>
                    <Image 
                        style = {{
                            width: 100, 
                            height: 100  
                    }} 
                    source = {require("../images/failure.png")}/>
                    <Text
                        style = {{
                            fontFamily: 'poppinsBold',
                            color: 'white',
                            fontSize: 24,
                            marginTop: 20
                        }}
                    >Payment Failed!</Text>
                    <Text style = {{
                        fontFamily: 'poppinsSemiBold',
                        marginTop: 35,
                        fontSize: 14,
                        color: 'white',
                        paddingLeft: 50,
                        paddingRight: 50,
                        textAlign: 'center'
                    }}>OOPS! Looks like something went wrong.Please try again</Text>
                    <TouchableOpacity style = {{
                                width: 350,
                                height: 50,
                                backgroundColor: '#4ACDF4',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginTop: 65,
                                borderRadius: 10,
                            }}
                                onPress = { () => {Actions.Checkout()}}
                            >
                            <Text style = {{
                                textAlign: 'center',
                                fontFamily: 'poppinsBold',
                                fontSize: 20,
                                color: 'white',
                                justifyContent: 'center'
                            }}>Retry Payment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{
                                width: 350,
                                height: 50,
                                borderWidth: 1,
                                borderColor: '#4ACDF4',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginTop: 15,
                                borderRadius: 10,
                            }}
                                onPress = { () => {Actions.Homepage()}}
                            >
                            <Text style = {{
                                textAlign: 'center',
                                fontFamily: 'poppinsBold',
                                fontSize: 20,
                                color: 'white',
                                justifyContent: 'center'
                            }}>Go to Main Menu</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

}

export default PaymentInComplete;