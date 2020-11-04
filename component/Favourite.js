import React, {Component} from 'react';
import {View, Text, SafeAreaView, Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';
import {Actions} from 'react-native-router-flux';
class Favourite extends Component {

    state = {
        classes: [
            {
                label: 'CLASS 2nd',
                value: 'Class2nd',
            },
            {
                label: 'CLASS 3rd',
                value: 'Class3rd',
            },
            {
                label: 'CLASS 4th',
                value: 'Class4th',
            },
            {
                label: 'CLASS 5th',
                value: 'Class5th',
            },
            {
                label: 'CLASS 6th',
                value: 'Class6th',
            },
            {
                label: 'CLASS 7th',
                value: 'Class7th',
            },
            {
                label: 'CLASS 8th',
                value: 'Class8th',
            },
            {
                label: 'CLASS 9th',
                value: 'Class9th',
            },
            {
                label: 'CLASS 10th',
                value: 'Class10th',
            },
            {
                label: 'CLASS 11th',
                value: 'Class11th',
            },
            {
                label: 'CLASS 12th',
                value: 'Class12th',
            },
        ],
    }

    // componentDidMount() {
    //     console.log(Dimensions.get('window').width);
    // }

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 15 : 0,
                    paddingBottom: 20
                }}
            >
            <ScrollView>
                <View>
                    <LinearGradient
                            // Button Linear Gradient
                            colors={[ '#004BAD', '#4ACDF4']}
                            start={[0, 1]} end={[1, 0]}
                            style={{ 
                                paddingLeft: 20, 
                                
                                // borderRadius: 5,
                                width: Dimensions.get('window').width,
                                // marginLeft: 16,
                                height: 115,
                                // borderRadius: 15
                        }}>
                            <TouchableOpacity
                                onPress = { () => Actions.pop()}
                            >
                            </TouchableOpacity>
                            <Text
                            style = {{
                                marginTop: Platform.OS == 'android' ? 0 : 25,
                                height: Platform.OS == 'android' ? 60: 50,
                                // borderColor: 'white',
                                // borderWidth: 2,
                                paddingTop: 25,
                                fontFamily: 'poppinsBold',
                                color: 'white',
                                fontSize: 25,
                                paddingRight: 65
                            }}
                            >
                                Help Us to know you
                            </Text>
                            <Text
                            style = {{
                                marginTop: Platform.OS == 'android' ? 0 : 25,
                                height: Platform.OS == 'android' ? 60: 50,
                                // borderColor: 'white',
                                // borderWidth: 2,
                                marginTop: -2, 
                                // paddingTop: 25,
                                fontFamily: 'poppinsBold',
                                color: 'white',
                                fontSize: 25,
                                paddingRight: 65
                            }}
                            >
                                better!
                            </Text>
                        </LinearGradient>
                    </View>
                    <View style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 20,
                        paddingRight: 20
                    }}>
                    <View>
                        <Text style = {{
                            marginTop: 38,
                            fontFamily: 'poppinsMedium',
                            color: 'white',
                            fontSize: 14,

                        }}>Which class are you in ?</Text>
                    </View>
                
                    {
                    this.state.classes ?
                <RNPickerSelect

                    placeholder={{
                        label: 'CLASS 1st',
                        value: 'Class1st',
                        color: '',
                        // fontFamily: 'poppinsMedium'
                    }}

                    style = {{
                        inputIOSContainer: {
                            marginTop: 30,
                            height: 40,                             
                            borderRadius: 25,
                            backgroundColor: '#2C2B2B',
                            width: 130
                        },
                        placeholder: {
                            // paddingTop: Platform.OS === 'android' ? 15: 15,
                            paddingLeft: Platform.OS === 'android' ? 15: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        },
                        inputAndroid: {
                            paddingLeft: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        },
                        inputIOS: {
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white' 
                        },

                        inputAndroidContainer: {
                            marginTop: 30,
                            height: 40,                             
                            borderRadius: 25,
                            backgroundColor: '#2C2B2B',
                            width: 130
                        }
                        
                    }}
                    items = {this.state.classes}
                    
                    useNativeAndroidPickerStyle = {false}

                    onValueChange = { (value, index) => {
                        
                    }}

                    Icon = { () => {
                        return (
                            <View
                            style = {{
                                // borderWidth: 2,
                                // borderColor: 'white',
                                marginTop: 10,
                                marginRight: 15,
                            }}>
                            <Image 
                            style = {{
                                width: 20,
                                height: 20,
                                tintColor: '#828282'
                                
                            }}
                            source = {require('../images/icon.png')}/>

                            </View>
                        )
                    }}
                >
                </RNPickerSelect>
                : null
                }
                </View>
                <View>
                    <Text style = {{
                        marginTop: 40,
                        paddingLeft: 20,
                        fontFamily: 'poppinsMedium',
                        color: 'white',
                        fontSize: 14,
                        
                    }}>Tell us about some of your interests.</Text>
                </View>
                <View 
                    style = {{
                        flex: 1,
                        flexDirection: "row",
                        marginTop: 20,
                        marginLeft: 17,
                        justifyContent: 'space-around',
                        marginRight: 17
                        }}>
                                
                            <LinearGradient
                // Button Linear Gradient
                            colors={[ '#6EDEFF', '#32C1ED', '#1285D1']}
                            style={{ 
                                paddingTop: 5, 
                                alignItems: 'center',
                                borderRadius: 5,
                                width: 170,
                                // marginLeft: 16,
                                height: 100,
                                borderRadius: 10,
                                justifyContent: 'center'
                        }}>
                            <Image 
                                source = {require("../images/flask-with-liquid2.png")}
                                style = {{
                                    height: 40,
                                    width: 40
                                }}
                            />
                            <Text style = {{
                                fontFamily: 'poppinsBold',
                                fontSize: 14,
                                color: '#fff',
                                marginTop: 5
                            }}>
                                Science
                            </Text>
                        </LinearGradient>
                        <TouchableOpacity
                            onPress = { () => {
                                this.setState({
                                    showModal: false
                                })
                                AsyncStorage.setItem('subject', 'Mathematics');
                                Actions.BottomNavigator();
                            }}
                        >
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#654FB6', '#24194C']}
                                style={{ 
                                    paddingTop: 5, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 170,
                                    // marginLeft: 16,
                                    height: 100,
                                    borderRadius: 10,
                                    justifyContent: 'center'
                            }}>
                                <Image 
                                    source = {require("../images/maths.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    Maths
                                </Text>

                            </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View
                            style = {{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 20,
                                marginLeft: 17,
                                justifyContent: 'space-around',
                                marginRight: 17,
                            }}>
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#EB68F3', '#6E25B6']}
                                style={{ 
                                    paddingTop: 5, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 170,
                                    // marginLeft: 16,
                                    height: 100,
                                    borderRadius: 10,
                                    justifyContent: 'center'
                            }}>
                                <Image 
                                    source = {require("../images/sst.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    SST
                                </Text>
                            </LinearGradient>
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#4AD240', '#177710']}
                                style={{ 
                                    paddingTop: 5, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 170,
                                    // marginLeft: 16,
                                    height: 100,
                                    borderRadius: 10,
                                    justifyContent: 'center'
                            }}>
                                <Image 
                                    source = {require("../images/eng.png")}
                                    style = {{
                                        height: 30,
                                        width: 43
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    English
                                </Text>
                            </LinearGradient>
                        </View>
                        <View
                            style = {{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 20,
                                    marginLeft: 17,
                                    justifyContent: 'space-around',
                                    marginRight: 17,
                                }}>
                            <LinearGradient
                    // Button Linear Gradient
                                colors={['#FFC56E', '#D16B12']}
                                style={{ 
                                    paddingTop: 5, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 170,
                                    // marginLeft: 16,
                                    height: 100,
                                    borderRadius: 10,
                                    justifyContent: 'center'
                            }}>
                                <Image 
                                    source = {require("../images/evs.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    EVS
                                </Text>
                            </LinearGradient>
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#EB68F3', '#6E25B6']}
                                style={{ 
                                    paddingTop: 5, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 170,
                                    // marginLeft: 16,
                                    height: 100,
                                    borderRadius: 10,
                                    justifyContent: 'center'
                            }}>
                                <Image 
                                    source = {require("../images/sst.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    SST
                                </Text>
                            </LinearGradient>
                        </View>
                        <View 
                    style = {{
                        flex: 1,
                        flexDirection: "row",
                        marginTop: 20,
                        marginLeft: 17,
                        justifyContent: 'space-around',
                        marginRight: 17
                        }}>
                                
                            <LinearGradient
                // Button Linear Gradient
                            colors={[ '#6EDEFF', '#32C1ED', '#1285D1']}
                            style={{ 
                                paddingTop: 5, 
                                alignItems: 'center',
                                borderRadius: 5,
                                width: 170,
                                // marginLeft: 16,
                                height: 100,
                                borderRadius: 10,
                                justifyContent: 'center'
                        }}>
                            <Image 
                                source = {require("../images/flask-with-liquid2.png")}
                                style = {{
                                    height: 40,
                                    width: 40
                                }}
                            />
                            <Text style = {{
                                fontFamily: 'poppinsBold',
                                fontSize: 14,
                                color: '#fff',
                                marginTop: 5
                            }}>
                                Science
                            </Text>
                        </LinearGradient>
                        <TouchableOpacity
                            onPress = { () => {
                                this.setState({
                                    showModal: false
                                })
                                AsyncStorage.setItem('subject', 'Mathematics');
                                Actions.BottomNavigator();
                            }}
                        >
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#654FB6', '#24194C']}
                                style={{ 
                                    paddingTop: 5, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 170,
                                    // marginLeft: 16,
                                    height: 100,
                                    borderRadius: 10,
                                    justifyContent: 'center'
                            }}>
                                <Image 
                                    source = {require("../images/maths.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    Maths
                                </Text>

                            </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View
                        style = {{
                            backgroundColor: '#4ACDF4',
                            width: 360,
                            alignSelf: 'center',
                            borderRadius: 15,
                            height: 50,
                            justifyContent: 'center',
                            marginTop: 40
                        }}
                    >
                            <TouchableOpacity
                                onPress = {() => {Actions.Homepage()}}
                            >
                                <Text 
                                    style = {{
                                        fontFamily: 'poppinsSemiBold',
                                        fontSize: 22,
                                        textAlign: 'center',
                                        color: 'white',
                                        
                                        // backgroundColor: '#4ACDF4',
                                    }} 
                                >
                                    Start Learning
                                </Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}

export default Favourite;