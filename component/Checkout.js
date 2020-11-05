import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, Keyboard, Dimensions, Animated, BackHandler} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Dash from 'react-native-dash';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

class Checkout extends Component {

    state = {
        code: '',
        codeWork: true,
        padding: new Animated.Value(0),
    }

    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => Actions.Payment() }
        ]);
        return true;
    };
    
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    componentDidMount() {

        BackHandler.addEventListener("hardwareBackPress", this.backAction);
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

    _keyboardDidShow = () => {
        Animated.timing( this.state.padding, { toValue: -210, duration: 100, useNativeDriver: false}).start();
        // this.setState({padding: 80})
    }
    
    _keyboardDidHide = () => {
        Animated.timing( this.state.padding, { toValue: 0, duration: 100, useNativeDriver: false}).start();
        // this.setState({padding: 120})
    }

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
                <ScrollView>
                <Animated.View style = {{marginTop: this.state.padding}}>
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
                    onPress = { () => {this.backAction()} }
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
                    marginTop: 40,
                    height: 455, 
                    borderRadius: 15, 
                    width: 350,
                    backgroundColor: '#141414',
                    // borderBottomWidth: 60, 
                    borderBottomColor: '#1D1D1D',
                    // borderColor: 'white',
                    // borderWidth: 2,
                    overflow: "hidden",
                    alignSelf: 'center'
                }}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={[ '#6EDFFF', '#14A1CC', '#0D78BF']}
                        style={{ 
                            // paddingTop: 25, 
                            justifyContent: 'center',
                            alignItems: 'center',
                            // borderRadius: 5,
                            // width: 100,
                            // marginLeft: 16,
                            height: 75,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15
                    }}>
                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {{
                                color: 'white',
                                fontFamily: 'poppinsBold',
                                fontSize: 20,
                            }}>Billing Details</Text>
                        </View>
                    </LinearGradient>
                    <View 
                        style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30}}
                    >
                        <Text style = {{
                            color: 'white',
                            fontFamily: 'poppinsBold'
                            }}
                        >Plan Name</Text>
                        <Text style = {{
                            color: '#4ACDF4',
                            fontFamily: 'poppinsBold'
                        }}
                        >Personality Development</Text>
                    </View>
                    <View 
                        style = {{marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between', marginTop: 32}}
                    >
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                            }}
                        >Actual Price</Text>
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                        }}
                        >Rs. 4500</Text>
                    </View>
                    <View 
                        style = {{marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}
                    >
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                            }}
                        >Discount</Text>
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                        }}
                        >Rs. 1200</Text>
                    </View>
                    <View 
                        style = {{marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}
                    >
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                            }}
                        >Plan Final Price</Text>
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                        }}
                        >Rs. 3300</Text>
                    </View>
                    <View 
                        style = {{marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}
                    >
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                            }}
                        >GST(18%)</Text>
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                        }}
                        >Rs. 500</Text>
                    </View>
                    <View 
                        style = {{marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}
                    >
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                            }}
                        >Coupon Discount</Text>
                        <Text style = {{
                            color: '#929292',
                            fontFamily: 'poppinsMedium'
                        }}
                        >Rs. 0</Text>
                    </View>
                    <View style = {{alignItems: 'center', marginTop: 23}}>
                        <Dash style={{width:300, height:1}} dashLength = {5} dashColor = '#929292' dashGap = {5} />
                    </View>
                    <View 
                        style = {{marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}
                    >
                        <Text style = {{
                            color: 'white',
                            fontFamily: 'poppinsBold',
                            fontSize: 20
                            }}
                        >Final Price</Text>
                        <Text style = {{
                            color: '#4ACDF4',
                            fontSize: 20,
                            fontFamily: 'poppinsBold'
                        }}
                        >Rs. 3800</Text>
                    </View>
                </View>
                <View style = {{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        // flex: 1,
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        backgroundColor: 'black',
                        // borderWidth: 0.5,
                        borderColor: '#4ACDF4',
                        borderWidth: 1,
                        height: 35,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        width: 250,
                        marginBottom: 7,
                        // marginLeft: 30,
                        marginTop: 28,
                        // marginRight: 100
                    }}>
                        <TextInput
                            style = {{ height: 38, fontFamily: 'poppinsSemiBold', color: 'white', fontSize: 12, justifyContent: 'center', paddingLeft: 10}}
                            value = {this.state.code}
                            onChangeText = {() => {}}
                            placeholder = "Have a promo Code?"
                            placeholderTextColor= '#707070'
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style = {{
                            height: 35,
                            width: 70,
                            backgroundColor: '#4ACDF4',
                            marginTop: 28,
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style = {{
                                fontFamily: 'poppinsBold',
                                fontSize: 13,
                                color: 'white'
                            }}>Apply</Text>
                    </View>
                </View>
                {this.state.codeWork ? null : <Text style = {{fontFamily: 'poppinsMedium', fontSize: 9, marginLeft: (Dimensions.get('window').width-320)/2, color: 'white'}}>Alas! The given code does not exist.</Text>}
                <TouchableOpacity style = {{
                            width: 350,
                            height: 50,
                            backgroundColor: '#4ACDF4',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: this.state.codeWork ? 44 : 28,
                            borderRadius: 10,
                        }}
                            onPress = { () => {Actions.PaymentComplete()}}
                        >
                        <Text style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsBold',
                            fontSize: 20,
                            color: 'white',
                            justifyContent: 'center'
                        }}>Proceed to Checkout</Text>
                </TouchableOpacity>
                    </Animated.View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}

export default Checkout;