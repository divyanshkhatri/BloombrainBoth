import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, ImageBackground, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';

class Profile extends Component {

    windowWidth = Dimensions.get('window').width;

    state = {
        totalProfile: 10,
        completedProfile: 4,
    }

    render() {
        let ratio = this.state.completedProfile/this.state.totalProfile;
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 40 : 0,
                    // marginTop: Platform.OS === 'android' ? 0 : 20,
                    // paddingBottom: 40
                }}
            >
                <ScrollView>
                <View style = {{marginTop: Platform.OS == "android" ? 0: 20, backgroundColor: "black", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}} >
                    <TouchableOpacity onPress = {() => Actions.Homepage()}>
                        <Image style = {{width: 25, height: 25}} source = {require('../images/back.png')} />
                    </TouchableOpacity>
                    <Text
                        style = {{
                            color: '#383838',
                            fontFamily: 'poppinsBold',
                            fontSize: 18,
                            // borderColor: 'white',
                            // borderWidth: 1,
                            // textAlign: 'center',
                            marginLeft: 24
                        }}
                    >My Profile</Text>
                    <Image style = {{width: 17, height: 15, marginLeft: 30,}} source = {require('../images/edit.png')} />
                </View>
                <View style = {{height: '100%', backgroundColor: "black", height: '20%', width: Dimensions.get('window').width, flexDirection: 'row', marginTop: 15, paddingTop: 20, marginRight: 30, height: 140}}>
                    <View style = {{
                        alignItems: 'center',
                        marginLeft: 30
                    }}>
                        <ImageBackground 
                            style = {{
                                width: 110, 
                                height: 110,
                                // borderColor: 'white',
                                // borderWidth: 2,
                                justifyContent: 'center'
                            }}
                            source = {require("../images/c.png")}>
                            <Image 
                                source = {require("../images/dp.jpg")} 
                                style = {{ alignSelf: 'center', width: 80, height: 80, borderRadius: 40, borderWidth:2, borderColor: '#4ACDF4'}}
                            />
                        </ImageBackground>
                    </View>
                    <View style = {{marginLeft: 25, marginTop: 5, flexDirection: 'column'}}>
                        <Text
                            style = {{
                                color: '#4ACDF4',
                                fontFamily: 'poppinsBold',
                                fontSize: 22,
                                // lineHeight: 20
                            }}
                            >Divyansh Khatri
                        </Text>
                        <View style = {{flexDirection: 'row', }}>
                            <Text 
                            style = {{
                                color: 'white',
                                fontFamily: 'poppinsBold',
                                fontSize: 12,
                                lineHeight: 15
                            }}>
                                Class 12
                            </Text>
                            <Text 
                                style={{
                                    color: 'white',
                                    fontFamily: 'poppinsSemiBold',
                                    fontSize: 10, 
                                    lineHeight: 12
                                }}>th
                            </Text>
                        </View>
                        <View>
                            <Text style = {{
                                color: '#828282',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 9,
                                marginTop: 15
                            }}>Active Plan</Text>
                            <View style = {{width: 210, flexDirection: 'row', alignItems: 'center'}}>
                                <Text style = {{
                                    color: 'white',
                                    fontFamily: "poppinsBold",
                                    fontSize: 10
                                }}>Personality Development  </Text>
                                <Image 
                                    source = {require("../images/dot.png")}
                                    style = {{width: 5, height: 5}}/>
                                <Text style = {{
                                    color: '#4ACDF4',
                                    fontSize: 10,
                                    fontFamily: 'poppinsBold'
                                }}>  6 Months
                                </Text>
                            </View> 
                        </View>   
                    </View>
                </View>
                    <View style = {{
                        backgroundColor: '#0A0A0A',
                        height: '110%',
                        paddingBottom: 60
                        // borderWidth: 2, 
                        // borderColor: 'purple'
                    }}>
                        <TouchableOpacity onPress = { () => {Actions.Payment()} }>
                            <LinearGradient
                    // Button Linear Gradient
                            colors={['#1285D1', '#32C1ED', '#6EDEFF']}
                            start = {[0, 1]} end = {[1, 0]}
                            style = {{
                                
                                // alignSelf: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                // width: this.windowWidth-32,
                                // borderColor: 'white',
                                // borderWidth: 1,
                                marginTop: 18,
                                height: 70,
                                marginLeft: 28,
                                marginRight: 30,
                                paddingLeft: 15,
                                borderRadius: 10,
                                overflow: 'hidden',

                                // justifyContent: "center"
                            }}>
                            <Text
                                style = {{
                                    // marginLeft: 8,
                                    fontFamily: 'poppinsBold',
                                    fontSize: 11,
                                    color: 'white',
                                    marginRight: 70,
                                    // borderWidth: 2, 
                                    // borderColor: 'purple'
                                }}
                            >Check out our exclusive plans to get access 
                            to all the content in our app!</Text>
                            <View
                                style = {{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    marginRight: 50,
                                    // borderWidth: 2, 
                                    // borderColor: 'purple'
                                }}
                            >
                            <Image 
                                style = {{
                                    // flexShrink: 1,
                                    // flex: 1,
                                    resizeMode: 'stretch',
                                    width: 14,
                                    height: 18,
                                    // borderWidth: 2, 
                                    // borderColor: 'purple',
                                    marginRight: 20
                                    // width: 20,
                                    // height: 20,
                                
                                    // justifyContent: 'flex-end'
                                    // borderWidth: 2,
                                    // borderColor: 'purple',
                                }}
                                source = {require("../images/arrow.png")} 
                            />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View
                        style = {{marginTop: 20, flexDirection: 'row'}}    
                    >
                        <Text 
                            style = {{
                                fontFamily: 'poppinsBold',
                                fontSize: 11,
                                marginLeft: 30,
                                color: 'white'
                            }}>
                            Profile Completed
                        </Text>
                        <View style = {{flexDirection: 'row'}}>
                            <View 
                                style = {{
                                    alignSelf: 'center',
                                    backgroundColor: '#4ACDF4',
                                    borderBottomLeftRadius: 2,
                                    borderTopLeftRadius: 2,
                                    borderTopRightRadius: 2, 
                                    borderBottomRightRadius: 2,
                                    width: 180*ratio,
                                    height: 4,
                                    marginLeft: 20,
                                }}
            
                            />
                            <View
                                style = {{
                                    alignSelf: 'center',
                                    backgroundColor: '#2C2B2B',
                                    // borderWidth: 2,
                                    // borderColor: 'white',
                                    // borderBottomLeftRadius: 4,
                                    borderTopRightRadius: 2,
                                    borderBottomRightRadius: 2,
                                    // borderBottomEndRadius: '5',
                                    width: 180*(1-ratio),
                                    height: 4,
                                    // marginLeft: 20,
            
                                }}
                            />
                        </View>
                        <Text style = {{
                            fontFamily: 'poppinsBold',
                            fontSize: 10,
                            marginLeft: 25,
                            // marginTop: 5,   
                            color: 'white'
                        }}>{Math.round(ratio*100)}%</Text>

                    </View>
                    {ratio == 1 ? null : <Text style = {{textAlign: 'center', color: '#4B4B4B', fontSize: 10, marginTop: 4}}>Complete your full profile to earn special rewards!</Text>}
                    <View
                        style = {{marginLeft: 30, marginTop: 30}}    
                    >
                        <Text style = {{
                            fontFamily: 'poppinsBold',
                            color: 'white',
                            fontSize: 14,
                            }}>
                            Account Details
                        </Text>
                        <View 
                            style = {{marginTop: 20, flexDirection: 'row'}}
                        >
                            <View
                                style = {{
                                    
                                    backgroundColor: "#212121", 
                                    // borderWidth: 2, 
                                    // borderColor: 'white',
                                    width: 38, 
                                    height: 38, 
                                    borderRadius: 19, 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source = {require('../images/user.png')}
                                    style = {{width: 18, height: 20, tintColor: '#4ACDF4'}}
                                />
                            </View>
                            <View style = {{justifyContent: 'center'}}>
                                <Text
                                    style = {{fontFamily: 'poppinsMedium', fontSize: 10, marginLeft: 10, color: '#4B4B4B', lineHeight: 15}}
                                >
                                    Username
                                </Text>
                                <Text
                                    style = {{fontFamily: 'poppinsBold', fontSize: 12, marginLeft: 10, color: '#4ACDF4'}}
                                >
                                    divyansh43
                                </Text>
                            </View>
                        </View>
                        <View 
                            style = {{marginTop: 20, flexDirection: 'row'}}
                        >
                            <View
                                style = {{
                                    
                                    backgroundColor: "#212121", 
                                    // borderWidth: 2, 
                                    // borderColor: 'white',
                                    width: 38, 
                                    height: 38, 
                                    borderRadius: 19, 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source = {require('../images/phone.png')}
                                    style = {{width: 18, height: 20, tintColor: '#4ACDF4'}}
                                />
                            </View>
                            <View style = {{justifyContent: 'center'}}>
                                <Text
                                    style = {{fontFamily: 'poppinsMedium', fontSize: 10, marginLeft: 10, color: '#4B4B4B', lineHeight: 15}}
                                >
                                    Phone Number
                                </Text>
                                <Text
                                    style = {{fontFamily: 'poppinsBold', fontSize: 12, marginLeft: 10, color: '#4ACDF4'}}
                                >
                                    7838774275
                                </Text>
                            </View>
                        </View>
                        <View 
                            style = {{marginTop: 20, flexDirection: 'row'}}
                        >
                            <View
                                style = {{
                                    
                                    backgroundColor: "#212121", 
                                    // borderWidth: 2, 
                                    // borderColor: 'white',
                                    width: 38, 
                                    height: 38, 
                                    borderRadius: 19, 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source = {require('../images/email.png')}
                                    style = {{width: 21, height: 16, tintColor: '#4ACDF4'}}
                                />
                            </View>
                            <View style = {{justifyContent: 'center'}}>
                                <Text
                                    style = {{fontFamily: 'poppinsMedium', fontSize: 10, marginLeft: 10, color: '#4B4B4B', lineHeight: 15}}
                                >
                                    E-mail ID
                                </Text>
                                <Text
                                    style = {{fontFamily: 'poppinsBold', fontSize: 12, marginLeft: 10, color: '#4ACDF4'}}
                                >
                                    khatri.divyansh98@gmail.com
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style = {{marginLeft: 30, marginTop: 30}}    
                    >
                        <Text style = {{
                            fontFamily: 'poppinsBold',
                            color: 'white',
                            fontSize: 14,
                            }}>
                            Account Details
                        </Text>
                        <View 
                            style = {{marginTop: 20, flexDirection: 'row'}}
                        >
                            <View
                                style = {{
                                    
                                    backgroundColor: "#212121", 
                                    // borderWidth: 2, 
                                    // borderColor: 'white',
                                    width: 38, 
                                    height: 38, 
                                    borderRadius: 19, 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source = {require('../images/user.png')}
                                    style = {{width: 18, height: 20, tintColor: '#4ACDF4'}}
                                />
                            </View>
                            <View style = {{justifyContent: 'center'}}>
                                <Text
                                    style = {{fontFamily: 'poppinsMedium', fontSize: 10, marginLeft: 10, color: '#4B4B4B', lineHeight: 15}}
                                >
                                    Username
                                </Text>
                                <Text
                                    style = {{fontFamily: 'poppinsBold', fontSize: 12, marginLeft: 10, color: '#4ACDF4'}}
                                >
                                    divyansh43
                                </Text>
                            </View>
                        </View>
                        <View 
                            style = {{marginTop: 20, flexDirection: 'row'}}
                        >
                            <View
                                style = {{
                                    
                                    backgroundColor: "#212121", 
                                    // borderWidth: 2, 
                                    // borderColor: 'white',
                                    width: 38, 
                                    height: 38, 
                                    borderRadius: 19, 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source = {require('../images/phone.png')}
                                    style = {{width: 18, height: 20, tintColor: '#4ACDF4'}}
                                />
                            </View>
                            <View style = {{justifyContent: 'center'}}>
                                <Text
                                    style = {{fontFamily: 'poppinsMedium', fontSize: 10, marginLeft: 10, color: '#4B4B4B', lineHeight: 15}}
                                >
                                    Phone Number
                                </Text>
                                <Text
                                    style = {{fontFamily: 'poppinsBold', fontSize: 12, marginLeft: 10, color: '#4ACDF4'}}
                                >
                                    7838774275
                                </Text>
                            </View>
                        </View>
                        <View 
                            style = {{marginTop: 20, flexDirection: 'row'}}
                        >
                            <View
                                style = {{
                                    
                                    backgroundColor: "#212121", 
                                    // borderWidth: 2, 
                                    // borderColor: 'white',
                                    width: 38, 
                                    height: 38, 
                                    borderRadius: 19, 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source = {require('../images/email.png')}
                                    style = {{width: 21, height: 16, tintColor: '#4ACDF4'}}
                                />
                            </View>
                            <View style = {{justifyContent: 'center'}}>
                                <Text
                                    style = {{fontFamily: 'poppinsMedium', fontSize: 10, marginLeft: 10, color: '#4B4B4B', lineHeight: 15}}
                                >
                                    E-mail ID
                                </Text>
                                <Text
                                    style = {{fontFamily: 'poppinsBold', fontSize: 12, marginLeft: 10, color: '#4ACDF4'}}
                                >
                                    khatri.divyansh98@gmail.com
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}

export default Profile;