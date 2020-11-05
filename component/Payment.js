import React, {Component} from 'react';
import {View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, Platform} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { Actions } from 'react-native-router-flux';

class Payment extends Component {

    state = {
        carouselItems: [
            {
                title: "Item 1",
                category: 'Personality Development',
                image: require("../images/payment-pd.png"),
                cutCost: "4000",
                discCost: "3200",
                feature1: "Personality Development",
                feature2: "Development",
                feature3: "Personality Development",
                feature4: "Personality Development",
                num: [
                    {
                        label: '6 months',
                        value: '6months',
                    },
                    {
                        label: '3 months',
                        value: '3months',
        
                    },
                    {
                        label: '1 month',
                        value: '1month',
          
                    },
                ],
            },
            {
                title: "Item 2",
                category: 'Academics',
                image: require("../images/payment-aca.png"),
                cutCost: "4000",
                discCost: "3200",
                feature1: "Academics",
                feature2: "Academics",
                feature3: "Academics",
                feature4: "Academics",
                num: [
                    {
                        label: '6 months',
                        value: '6months',
                    },
                    {
                        label: '3 months',
                        value: '3months',
        
                    },
                    {
                        label: '1 month',
                        value: '1month',
          
                    },
                ],
            },
            {
                title:"Item 3",
                category: "Programming",
                image: require("../images/payment-inv.png"),
                cutCost: "4000",
                discCost: "3200",
                feature1: "Programming",
                feature2: "Development",
                feature3: "Programming Development",
                feature4: "Development",
                num: [
                    {
                        label: '6 months',
                        value: '6months',
                    },
                    {
                        label: '3 months',
                        value: '3months',
        
                    },
                    {
                        label: '1 month',
                        value: '1month',
          
                    },
                ],
            },
        ],
        activeIndex:0,
    }

    _renderItem({item}){
        return (
            <View style = {{
                marginTop: 55,
                height: 560, 
                borderRadius: 15, 
                overflow: 'hidden',
                width: 290, 
                backgroundColor: '#141414',
                // borderBottomWidth: 60, 
                borderBottomColor: '#1D1D1D',
                // borderColor: 'white',
                // borderWidth: 2
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
                        height: 85,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                }}>
                    <View style = {{flexDirection: 'row', width: '90%'}}>
                        <Image source = {item.image} style = {{width: 50, height: 50}} />
                        <View style = {{
                            marginLeft: 10,
                            marginTop: 5
                        }}>
                            <Text style = {{
                                color: '#ffffff',
                                fontFamily: 'poppinsBold',
                                fontSize: 12,
                                textShadowColor:'#4ACDF4',
                                // textShadowOffset:{width: 5, height: 5},
                                textShadowRadius:10,
                                // borderWidth: 1,
                                // borderColor: "#77D2F0",
                                opacity: 0.4
                            }}>Category</Text>
                            <Text style = {{
                                marginLeft: 6,
                                color: 'white',
                                fontFamily: 'poppinsExtraBold',
                                fontSize: 14,
                                lineHeight: 17
                            }}>{item.category}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View 
                    style = {{
                        // borderColor: 'white',
                        // borderWidth: 2,
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 40
                    }}>
                    <Text style = {{
                        fontFamily: 'poppinsMedium',
                        color: '#4A4A4A',
                        fontSize: 14,
                        // borderColor: 'white',
                        // borderWidth: 2,
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                    }}>Rs. {item.cutCost}/Month</Text>
                    <View style = {{
                        flexDirection: 'row'
                    }}>
                        <Text style = {{
                            fontFamily: 'poppinsBold',
                            color: '#4ACDF4',
                            fontSize: 32,
                            // borderColor: 'white',
                            // borderWidth: 2,
                        }}>Rs. {item.discCost}</Text>
                        <Text style = {{
                            fontFamily: 'poppinsSemiBold',
                            color: '#4ACDF4',
                            fontSize: 16,
                            paddingTop: 18
                        }}> / Month</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <Image style = {{
                            width: 25,
                            height: 25,
                        }} 
                        source = {require('../images/feature.png')}/>
                        <Text
                            style = {{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 14,
                                color: 'white',
                                marginLeft: 14,
                            }}
                        >{item.feature1}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 30}}>
                        <Image style = {{
                            width: 25,
                            height: 25,
                        }} 
                        source = {require('../images/feature.png')}/>
                        <Text
                            style = {{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 14,
                                color: 'white',
                                marginLeft: 14,
                            }}
                        >{item.feature2}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 30}}>
                        <Image style = {{
                            width: 25,
                            height: 25,
                        }} 
                        source = {require('../images/feature.png')}/>
                        <Text
                            style = {{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 14,
                                color: 'white',
                                marginLeft: 14,
                            }}
                        >{item.feature3}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 30}}>
                        <Image style = {{
                            width: 25,
                            height: 25,
                        }} 
                        source = {require('../images/feature.png')}/>
                        <Text
                            style = {{
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 14,
                                color: 'white',
                                marginLeft: 14,
                            }}
                        >{item.feature4}</Text>
                    </View>
                </View>
                <RNPickerSelect
                    placeholder={{
                        label: '12 months',
                        value: '12months',
                        color: '',
                    }}

                    style = {{
                        inputIOSContainer: {
                            margin: 16,
                            height: 40,                            
                            borderRadius: 10,
                            backgroundColor: '#141414',
                            borderWidth: 2,
                            borderColor: '#4ACDF4',
                            width: 215,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 30
                        },
                        placeholder: {
                            // paddingTop: 10,
                            marginLeft: 20,
                            lineHeight: 15,
                            fontSize: 13,
                            fontFamily: 'poppinsBold',
                            color: 'white',
                            // borderColor: 'white',
                            // borderWidth: 1,
                        },
                        inputAndroidContainer: {
                            margin: 16,
                            height: 40,                            
                            borderRadius: 10,
                            backgroundColor: '#141414',
                            borderWidth: 2,
                            borderColor: '#4ACDF4',
                            width: 215,
                            alignSelf: 'center',
                            // alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30,
                            // borderColor: 'white',
                            // borderWidth: 1,
                        },
                        inputAndroid: {
                            fontSize: 13,
                            lineHeight: 10,
                            fontFamily: 'poppinsBold',
                            color: 'white',
                            marginLeft: 20
                        },
                        inputIOS: {
                            paddingLeft: 15,
                            // paddingTop: 10,
                            fontSize: 13,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        }              
                    }}
                    items = {item.num}
                    onValueChange = { () => {
                    }}
                    useNativeAndroidPickerStyle={false}
                    Icon = { () => {
                        return (
                            <View
                                style = {{
                                    // borderWidth: 2,
                                    // borderColor: 'white',
                                    // marginTop: 12,
                                    marginRight: 15
                                }}>
                                <Image 
                                    style = {{
                                        width: 20,
                                        height: 20,
                                        
                                    }}
                                    source = {require('../images/icon.png')}
                                />
                            </View>
                        )
                    }}
                />
                <TouchableOpacity style = {{
                        width: 215,
                        height: 35,
                        backgroundColor: '#4ACDF4',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        borderRadius: 10
                    }}
                        onPress = { () => {Actions.Checkout()}}
                    >
                        <Text style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 16,
                            color: 'white',
                            justifyContent: 'center'
                        }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        )
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                containerStyle = {{
                    marginTop: 10,
                    // borderColor: 'white',
                    // borderWidth: 3,
                    paddingBottom: 4,
                }}
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 9,
                    height: 9,
                    borderRadius: 4.5,
                    marginHorizontal: -10,
                    backgroundColor: '#32C6F3'
                }}
                inactiveDotStyle={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    marginHorizontal: -10,
                    backgroundColor: 'grey'
                    // Define styles for inactive dots here
                }}
            //   inactiveDotOpacity={0.4}
            //   inactiveDotScale={0.6}
            />
        );
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
                    <TouchableOpacity onPress = {() => Actions.Profile()}>
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
                    >Membership Plans</Text>
                </View>
                <View style = {{
                    marginTop: Platform.OS == "android" ? 30 : -8,
                    alignItems: 'center',
                    }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}

                        renderItem={this._renderItem}
                        sliderWidth= {Dimensions.get('window').width}
                        itemWidth={300}
                        enableMomentum={false}
                        lockScrollWhileSnapping
                        // autoplay
                        useScrollView
                        loop
                        autoplayInterval={3000}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    
                    {this.pagination}
                </View>

            </SafeAreaView>
        )
    }

}

export default Payment;