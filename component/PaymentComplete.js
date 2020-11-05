import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PaymentComplete extends Component {

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
                    source = {require("../images/success.png")}/>
                    <Text
                        style = {{
                            fontFamily: 'poppinsBold',
                            color: 'white',
                            fontSize: 24,
                            marginTop: 20
                        }}
                    >Payment Successful</Text>
                    <Text style = {{
                        fontFamily: 'poppinsSemiBold',
                        marginTop: 35,
                        fontSize: 14,
                        color: 'white',
                        paddingLeft: 45,
                        paddingRight: 45,
                        textAlign: 'center'
                    }}>Thank you for your purchase! An automated payment reciept will be sent to your registered Email ID </Text>
                    <TouchableOpacity style = {{
                                width: 350,
                                height: 50,
                                backgroundColor: '#4ACDF4',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginTop: 45,
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
                            }}>Continue Learning</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

}

export default PaymentComplete;