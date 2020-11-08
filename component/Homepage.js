import React, {Component} from 'react';
import {View, Text, Image, Dimensions, SafeAreaView, FlatList, TouchableOpacity, BackHandler,TouchableWithoutFeedback, Alert, AsyncStorage, Platform} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';

class Hompage extends Component {

    windowWidth = Dimensions.get('window').width;

    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to Exit?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };


    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
        AsyncStorage.getItem('id')
        .then((value) => {
            this.setState({id: value})
            let url = 'http://idirect.bloombraineducation.com/idirect/lms/profile?id='+this.state.id;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({profileData: responseJson})
                console.log(this.state.profileData);
            })
            .catch((error) => {
                this.setState({login: false})
                console.error(error);
            });
        })
        .catch((e) => console.log(e));
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    state = {
        profileData: {},
        showModalCong: false,
        showModal: false,
        activeIndex:0,
        academics: false,
        invention: false,
        communication: false,
        carouselItems: [
            {
                "id": 1,
                image: require("../images/picks.png"),
                "teacher_name": "Bhavika Chopra", 
                "video_duration": 32.833333333333336, 
                "course": "science", 
                "is_lock": false,
                "class_data": "2", 
                "title": "Introduction to Straight Lines", 
                "description": "science class desc", 
                "thumbnail_url": "https://www.bloombraineducation.com/assets/images/youtube_logo/2.jpg",
                "video_url": "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            },
            {
                "id": 2,
                image: require("../images/picks.png"),
                "teacher_name": "Bhavika Chopra", 
                "video_duration": 32.833333333333336, 
                "course": "science", 
                "is_lock": false,
                "class_data": "2", 
                "title": "Introduction to Straight Lines", 
                "description": "science class desc", 
                "thumbnail_url": "https://www.bloombraineducation.com/assets/images/youtube_logo/2.jpg",
                "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            },
            {
                "id": 3,
                image: require("../images/picks.png"),
                "teacher_name": "Bhavika Chopra", 
                "video_duration": 32.833333333333336, 
                "course": "science", 
                "is_lock": false,
                "class_data": "2", 
                "title":  "Introduction to Straight Lines", 
                "description": "science class desc", 
                "thumbnail_url": "https://www.bloombraineducation.com/assets/images/youtube_logo/2.jpg",
                "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            },
            {
                "id": 4,
                image: require("../images/picks.png"),
                "teacher_name": "Bhavika Chopra", 
                "video_duration": 32.833333333333336, 
                "course": "science", 
                "is_lock": false,
                "class_data": "2", 
                "title": "Introduction to Straight Lines", 
                "description": "science class desc", 
                "thumbnail_url": "https://www.bloombraineducation.com/assets/images/youtube_logo/2.jpg",
                "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            },
            {
                "id": 5,
                image: require("../images/picks.png"),
                "teacher_name": "Bhavika Chopra", 
                "video_duration": 32.633333333333336, 
                "course": "science", 
                "is_lock": false,
                "class_data": "2", 
                "title": "Video 5", 
                "description": "science class desc", 
                "thumbnail_url": "https://www.bloombraineducation.com/assets/images/youtube_logo/2.jpg",
                "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            },
          ],
        categories: [
            {
                title: "Academics",
                id: '1',
                imageUrl: require('../images/academics.png'),
                backgroundColor: '#173F14',
                gradient1: '#4AD240',
                gradient2: '#177710',

            },

            {   
                title: "Invention",
                id: '2',
                imageUrl: require('../images/invention.png'),
                backgroundColor: '#1A0F43',
                gradient1: '#654FB6',
                gradient2: '#24194C'
            },
                
            {
                title: "Communication",
                id: '3',
                imageUrl: require('../images/comm.png'),
                backgroundColor: '#470C6F',
                gradient1: '#EB68F3',
                gradient2: '#6E25B6'
            }
        ]
    }
        
    renderCategories = ({item}) => {
        return (
            <TouchableOpacity
                onPress = {() => {
                        item.title == "Academics" ? this.setState({academics: true}) : 
                        item.title == "Invention" ? this.setState({invention: true}) :
                        this.setState({communication: true})
                    }
                }
            >
                <LinearGradient
                    // Button Linear Gradient
                    colors={[ item.gradient1, item.gradient2]}
                    style={{ 
                        paddingTop: 25, 
                        alignItems: 'center',
                        borderRadius: 5,
                        width: Dimensions.get('window').width/2.5,
                        marginLeft: 16,
                        height: Platform.OS == 'android' ? 220 : 200,
                        borderRadius: 15
                    }}>
                    <Image 
                        source = {item.imageUrl}
                        style = {{
                            height: 22,
                            width: 25
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 5,
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 15,
                            color: '#fff',
                        }}>
                        {item.title}
                    </Text>
                    <Text 
                    style = {{
                        paddingLeft: 4,
                        paddingRight: 4,
                        textAlign: 'center',
                        marginTop: 5,
                        fontFamily: 'poppinsRegular',
                        fontSize: 10,
                        color: '#fff',
                    }}>
                    Get a head start for your school curriculum by our thorough videos.
                    </Text>
                    <Text
                    style = {{
                        paddingLeft: 4,
                        paddingRight: 4,
                        marginTop: 5,
                        textAlign: 'center',
                        fontFamily: 'poppinsRegular',
                        fontSize: 8,
                        // alignSelf: "flex-start",
                        paddingTop: 5,
                        // paddingLeft: 13,
                        color: '#fff',
                    }}>
                        Total Chapters: 12
                    </Text>
                    <Text
                    style = {{
                        marginTop: 5,
                        fontFamily: 'poppinsRegular',
                        fontSize: 8,
                        // alignSelf: "flex-start",
                        textAlign: 'center',
                        paddingTop: -2,
                        // paddingLeft: 13,
                        color: '#fff',
                    }}>
                        Total Videos: 140
                    </Text>
                    <Text
                    style = {{
                        backgroundColor: item.backgroundColor,
                        borderColor: 'white',
                        borderRadius: 10,
                        paddingTop: 2.5,
                        width: Platform.OS == "android" ? 80: 75,
                        height: 21,
                        marginTop: 12,
                        // marginLeft: 13,
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBold',
                        fontSize: 11,
                        alignSelf: "center",
                        overflow: 'hidden',
                        color: '#fff',
                    }}>
                        Explore Now
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

        )
    }

    _renderItem({item}){
        // let a = this.state.carouselItems;
        return (
            <TouchableOpacity onPress = {() => { 
                    Actions.push('VideoPlayer',{titlePage: item} );
                }}>
                <View style = {{
                    height: 200, 
                    borderRadius: 15, 
                    width: 300, 
                    borderBottomWidth: 60, 
                    borderBottomColor: '#151515'
                    }}>
                    <Image
                        source = {item.image} 
                        style = {{
                            borderRadius: 15,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                            width: 300,
                            height: 140,
                            // opacity: 0.9,
                            // borderBottomWidth: 20,
                            borderColor: '#ffffff'
                        }}
                    />
                    <Text
                    style = {{
                        margin: 10,
                        marginBottom: 0,
                        fontFamily: "poppinsSemiBold",
                        fontSize: 16,
                        // borderWidth: 2,
                        // borderColor: 'white',
                        color: 'white'
                    }}>
                        Vowels and Consonants</Text>

                    <Text
                    style = {{marginLeft: 10,
                        fontFamily: "poppinsRegular",
                        fontSize: 10,
                        // borderWidth: 2,
                        // borderColor: 'white',
                        color: '#707070',
                    }}>
                        English{">"}Class 4</Text>
                </View>
            </TouchableOpacity>
        )
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                containerStyle = {{
                    marginTop: -15,
                    // borderColor: 'white',
                    // borderWidth: 3,
                    paddingBottom: 4,
                }}
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 3.5,
                    //   marginTop: -20,
                    marginHorizontal: -10,
                    backgroundColor: '#32C6F3'
                }}
                inactiveDotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    // marginTop: -20,
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
        return(
            <SafeAreaView 
            style = {{
                // borderWidth: 2,
                // borderColor: 'white',
                flex: 1, 
                flexDirection: "column",
                backgroundColor: 'black',
                paddingTop: Platform.OS === 'android' ? 40 : 0,
                // alignItems: 'center'
                }}>

                <Modal 
                    isVisible = {this.state.invention}
                    animationIn = "pulse"
                    // animationOut = "pulse"
                    transparent = {true}
                    onBackdropPress = {() => this.setState({invention: false})}
                >   
                    <View>
                    <View
                    style = {{
                        // flex: 1,
                        // borderColor: 'blue',
                        // borderWidth: 2,
                        margin: 20,
                        // marginTop: Dimensions.get('window').height/5,
                        backgroundColor: '#232323',
                        borderRadius: 20,
                        padding: 35,
                        width: 310,
                        height: 390,
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        alignSelf: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.75,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                    >   
                        <Text 
                            style = {{
                                fontFamily: 'poppinsExtraBold',
                                color: 'white',
                                fontSize: 20,
                                marginBottom: 30,
                                // marginLeft: 20,
                                textAlign: "center"
                        }}>
                            Choose a Subject
                        </Text>
                        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        invention: false
                                    })
                                    AsyncStorage.setItem('subject', 'Robotics');
                                    AsyncStorage.setItem('category', 'Invention');
                                    Actions.BottomNavigator();
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#6EDEFF', '#32C1ED', '#1285D1']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 120,
                                        marginRight: 10,
                                        alignSelf: 'center',
                                        marginBottom: 10,
                                        height: 120,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/robotics.png")}
                                        style = {{
                                            height: 50,
                                            width: 50
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsExtraBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5,
                                        textAlign: 'center'
                                    }}>
                                        Robotics
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        invention: false
                                    })
                                    AsyncStorage.setItem('subject', 'Coding');
                                    AsyncStorage.setItem('category', 'Invention');
                                    Actions.BottomNavigator({subject: "Coding"});
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#654FB6', '#24194C']}
                                    style={{ 
                                        // alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 120,
                                        marginBottom: 10,
                                        marginLeft: 10,
                                        alignSelf: 'flex-start',
                                        height: 120,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/coding.png")}
                                        style = {{
                                            height: 50,
                                            width: 50,
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsExtraBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5,
                                        textAlign: 'center'
                                    }}>
                                        Coding
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity 
                                onPress = { () => {
                                    this.setState({
                                        invention: false
                                    })
                                    AsyncStorage.setItem('subject', '3D-Printing');
                                    AsyncStorage.setItem('category', 'Invention');
                                    Actions.BottomNavigator({subject: "3D-Printing"});
                                }}>
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#EB68F3', '#6E25B6']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 120,
                                        marginTop: 10,
                                        alignSelf: 'flex-start',
                                        height: 120,
                                        borderRadius: 15,
                                        marginLeft: -10,
                                }}>
                                    <Image 
                                        source = {require("../images/3d-printer.png")}
                                        style = {{
                                            height: 50,
                                            width: 50,
                                            tintColor: "white"
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsExtraBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        3D Printing
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal 
                    isVisible = {this.state.communication}
                    animationIn = "pulse"
                    // animationOut = "pulse"
                    transparent = {true}
                    onBackdropPress = {() => this.setState({communication: false})}
                >   
                <View>
                    <View
                    style = {{
                        // flex: 1,
                        // borderColor: 'blue',
                        // borderWidth: 2,
                        margin: 20,
                        // marginTop: Dimensions.get('window').height/5,
                        backgroundColor: '#232323',
                        borderRadius: 20,
                        padding: 35,
                        width: Platform.OS == "ios" ? 310: 340,
                        height: Platform.OS == "ios" ? 390: 420,
                        alignSelf: 'center',
                        // alignItems: 'center',
                        justifyContent: 'center',
                        // alignSelf: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.75,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                    >   
                        <Text 
                            style = {{
                                fontFamily: 'poppinsExtraBold',
                                color: 'white',
                                fontSize: 20,
                                marginBottom: 30,
                                // marginLeft: 20,
                                textAlign: "center"
                        }}>
                            Choose a Subject
                        </Text>
                        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        communication: false
                                    })
                                    AsyncStorage.setItem('subject', 'Personality Development');
                                    AsyncStorage.setItem('category', 'Communication');
                                    Actions.BottomNavigator();
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#6EDEFF', '#32C1ED', '#1285D1']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: Platform.OS == "ios" ? 120 : 125,
                                        marginRight: 10,
                                        alignSelf: 'center',
                                        marginBottom: 10,
                                        height: Platform.OS == "ios" ? 120 : 125,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/development.png")}
                                        style = {{
                                            height: 50,
                                            width: 50
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5,
                                        textAlign: 'center'
                                    }}>
                                        Personality Development
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        communication: false
                                    })
                                    AsyncStorage.setItem('subject', 'English Core Grammar');
                                    AsyncStorage.setItem('category', 'Communication');
                                    Actions.BottomNavigator({subject: "English Core Grammar"});
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#654FB6', '#24194C']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: Platform.OS == "ios" ? 120 : 125,
                                        marginBottom: 10,
                                        marginLeft: 10,
                                        alignSelf: 'center',
                                        height: Platform.OS == "ios" ? 120 : 125,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/grammar.png")}
                                        style = {{
                                            height: 50,
                                            width: 50,
                                            tintColor: "white"
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5,
                                        textAlign: 'center'
                                    }}>
                                        English Core Grammar
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity 
                                onPress = { () => {
                                    this.setState({
                                        communication: false
                                    })
                                    AsyncStorage.setItem('subject', 'Public Speaking');
                                    AsyncStorage.setItem('category', 'Communication');
                                    Actions.BottomNavigator({subject: "Public Speaking"});
                                }}>
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#EB68F3', '#6E25B6']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: Platform.OS == "ios" ? 120 : 125,
                                        marginTop: 10,
                                        alignSelf: 'flex-start',
                                        height: Platform.OS == "ios" ? 120 : 125,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/speaking.png")}
                                        style = {{
                                            height: 50,
                                            width: 50,
                                            tintColor: "white"
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        Public Speaking
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* <Modal 
                    visible = {this.state.showModalCong}
                    animationType = "fade"
                    transparent = {true}
                >   
                    <TouchableOpacity 
                        style = {{
                            height: '100%'
                        }}
                        onPress={() => {
                        this.setState({showModalCong: !this.state.showModalCong})
                    }}>
                    <View>
                        <TouchableWithoutFeedback onPress={() => { }}>
                        <View
                        style = {{
                            // flex: 1,
                            // borderColor: 'white',
                            // borderWidth: 2,
                            margin: 20,
                            marginTop: Dimensions.get('window').height/4 - 10,
                            backgroundColor: '#232323',
                            borderRadius: 20,
                            padding: 35,
                            width: 335,
                            height: 420,
                            alignSelf: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.75,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                        >   
                        <Text
                            style = {{
                                textAlign: 'center',
                                fontFamily: 'poppinsBold',
                                fontSize: 24,
                                color: 'white',
                                marginBottom: 20
                            }}
                        >Hurray!</Text>
                        <Image 

                            source = {require("../images/party.png")}
                            style = {{
                                width: 228, 
                                height: 160,
                                // borderColor: 'white',
                                // borderWidth: 2,
                                alignSelf: 'center'
                            }}
                        />
                        <Text
                            style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsBold',
                            fontSize: 15,
                            color: 'white',
                            marginTop: 20
                        }}
                        >Conratulations! You just earned</Text>
                        <Text
                            style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsBold',
                            fontSize: 15,
                            color: '#67F2F6',
                            marginTop: 10
                        }}
                        >50 Bloombrain credits !</Text>
                        <Text
                            style = {{
                            textAlign: 'center',
                            fontFamily: 'poppinsBold',
                            fontSize: 15,
                            color: '#585858',
                            marginTop: 30
                        }}
                        >Current Balance: 680BB</Text>
                    </View>
                    </TouchableWithoutFeedback>
                    </View>
                    </TouchableOpacity>
                </Modal> */}

                <Modal
                    
                    isVisible = {this.state.academics}
                    animationIn = "pulse"
                    // animationOut = "pulse"
                    onBackdropPress = {() => {this.setState({academics: false})}}
                    transparent = {true}
                    style = {{
                        // width: 320,
                        // height: 400,
                        // borderColor: 'white',
                        // borderWidth: 2
                    }}
                    // backdropOpacity = {0.8}
                    // backgroundColor = '#000'
                    // backdropOpacity= {1}
                    // backdropColor={'green'}
                >   
                <View>
                    <View
                    style = {{
                        // flex: 1,
                        // borderColor: 'blue',
                        // borderWidth: 2,
                        margin: 20,
                        // marginTop: Dimensions.get('window').height/5,
                        backgroundColor: '#232323',
                        borderRadius: 20,
                        padding: 35,
                        width: 310,
                        height: 450,
                        // alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.75,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                    >   
                        <Text 
                            style = {{
                                fontFamily: 'poppinsExtraBold',
                                color: 'white',
                                fontSize: 20,
                                // marginBottom: 10,
                                // marginLeft: 20,
                                alignSelf: "center"
                        }}>
                            Choose a Subject
                        </Text>
                        <View 
                            style = {{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 20,
                                alignContent: "space-between",
                                justifyContent: 'space-evenly'
                                }}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        academics: false
                                    })
                                    AsyncStorage.setItem('subject', 'Science');
                                    AsyncStorage.setItem('category', 'Academics');
                                    Actions.BottomNavigator();
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#6EDEFF', '#32C1ED', '#1285D1']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        // marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
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
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        academics: false
                                    })
                                    AsyncStorage.setItem('subject', 'Mathematics');
                                    AsyncStorage.setItem('category', 'Academics');
                                    Actions.BottomNavigator({subject: "Mathematics"});
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#654FB6', '#24194C']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,

                                        height: 100,
                                        borderRadius: 15
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
                                marginTop: Platform.OS == "ios" ? 25 : 30,
                                alignSelf: 'center',
                                alignItems: 'center',
                                // justifyContent: 'center'
                            }}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        academics: false
                                    })
                                    AsyncStorage.setItem('subject', 'SST');
                                    AsyncStorage.setItem('category', 'Academics');
                                    Actions.BottomNavigator();
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#EB68F3', '#6E25B6']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3,  
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        // marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
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
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        academics: false
                                    })
                                    AsyncStorage.setItem('subject', 'English');
                                    AsyncStorage.setItem('category', 'Academics');
                                    Actions.BottomNavigator({subject: "English"});
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#4AD240', '#177710']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 25,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/eng.png")}
                                        style = {{
                                            height: 30,
                                            width: 43,
                                            tintColor: 'white'
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
                            </TouchableOpacity>
                        </View>
                        <View
                            style = {{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 20,
                                    alignSelf: 'flex-start'
                                }}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        academics: false
                                    })
                                    AsyncStorage.setItem('subject', 'EVS');
                                    AsyncStorage.setItem('category', 'Academics');
                                    Actions.BottomNavigator();
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#FFC56E', '#D16B12']}
                                    style={{ 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: 3, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 8,
                                        height: 100,
                                        borderRadius: 15
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
                            </TouchableOpacity>
                        </View>
                        {/* <View 
                            style = {{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 20
                                // justifyContent: 'space-evenly'
                                }}>
                                

                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#654FB6', '#24194C']}
                                style={{ 
                                    paddingTop: 25, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 100,
                                    marginLeft: 16,
                                    height: 100,
                                    borderRadius: 15
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
                                    Maths
                                </Text>

                            </LinearGradient>
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#EB68F3', '#6E25B6']}
                                style={{ 
                                    paddingTop: 25, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 100,
                                    marginLeft: 16,
                                    height: 100,
                                    borderRadius: 15
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
                                    EVS
                                </Text>
                            </LinearGradient>
                            </View>
                            <View
                            style = {{
                                flex: 1, 
                                flexDirection: 'row',
                                marginTop: 20
                            }}>
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#4AD240', '#177710']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
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
                                        English
                                    </Text>
                                </LinearGradient>
                            </View> */}
                        </View>
                        </View>
                    </Modal>
                
                <TouchableOpacity onPress = {() => {Actions.Profile()}}>
                    <View 
                        style = {{
                        // flex: 1,
                            marginTop: 20, 
                            marginLeft: 16, 
                            flexDirection: 'row',
                            // width: 200, 
                            // borderWidth: 2,
                            // borderColor: 'white'
                        }}>
                        <Image 
                        source = {require("../images/dp.jpg")}
                        style = {{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            borderColor: '#32C6F3',
                            borderWidth: 1

                        }}
                        />
                        <View 
                        style = {{
                            marginLeft: 6
                        }}
                        >
                        <Text 
                        style = {{
                            fontFamily : "poppinsMedium",
                            fontSize: 14,
                            color: 'white',
                            height: 18,
                            // borderColor: 'white',
                            // borderWidth: 3
                        }}>
                            Hi {this.state.profileData["username"]}
                        </Text>
                        <Text
                        style = {{
                            fontFamily : "poppinsMedium",
                            fontSize: 12,
                            color: '#707070',
                            height: 40,
                        }}
                        >What will you like to learn today?</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <LinearGradient
            // Button Linear Gradient
                    colors={['#1285D1', '#32C1ED', '#6EDEFF']}
                    start={[0, 1]} end={[1, 0]}
                    style = {{
                        marginTop: Platform.OS == "android" ? 10 : 0,
                        alignSelf: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: this.windowWidth-32,
                        // borderColor: 'white',
                        // borderWidth: 1,
                        height: 80,
                        paddingLeft: 20,
                        borderRadius: 16,
                        overflow: 'hidden',

                        // justifyContent: "center"
                    }}>
                <Image 
                    style = {{
                        width: 20,
                        height: 20
                    }}
                    source = {require("../images/wifi.png")} 
                />
                {/* <TouchableOpacity 
                    style = {{
                        boderWidth: 2,
                        borderColor: 'white'
                    }}
                    onPress = {() => {
                        this.setState({showModalCong: true})
                        console.log(this.state.showModalCong);
                    }}> */}
                    <Text
                        style = {{
                            marginLeft: 8,
                            fontFamily: 'poppinsMedium',
                            fontSize: 16,
                            color: 'white'
                        }}
                    >Your Class is Live Now!</Text>
                {/* </TouchableOpacity> */}
                <View
                    style = {{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingRight: 20,
                    }}
                >
                <Image 
                    style = {{
                        // flexShrink: 1,
                        // flex: 1,
                        width: 12,
                        height: 20,
                       
                        // justifyContent: 'flex-end'
                        // borderWidth: 2,
                        // borderColor: 'purple',
                    }}
                    source = {require("../images/arrow.png")} 
                />
                </View>
                </LinearGradient>

                <Text
                    style = {{
                        marginTop: Platform.OS == "android" ? 30 : 20, 
                        marginLeft: 16,
                        fontFamily : "poppinsSemiBold",
                        fontSize: 18,
                        color: 'white'
                    }}>
                        Top picks for you</Text>
                <View style = {{
                    marginTop: 20,
                    alignItems: 'center',
                    }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        renderItem={({item}) => 
                        (
                            <TouchableOpacity onPress = {() => { 
                                    Actions.push('VideoPlayer',{titlePage: item, videos: this.state.carouselItems} );
                                }}>
                                <View style = {{
                                    height: 200, 
                                    borderRadius: 15, 
                                    width: 300, 
                                    borderBottomWidth: 60, 
                                    borderBottomColor: '#151515'
                                    }}>
                                    <Image
                                        source = {{uri: item["thumbnail_url"]}} 
                                        style = {{
                                            borderRadius: 15,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 0,
                                            width: 300,
                                            height: 140,
                                            // opacity: 0.9,
                                            // borderBottomWidth: 20,
                                            borderColor: '#ffffff'
                                        }}
                                    />
                                    <Text
                                    style = {{
                                        margin: 10,
                                        marginBottom: 0,
                                        fontFamily: "poppinsSemiBold",
                                        fontSize: 16,
                                        // borderWidth: 2,
                                        // borderColor: 'white',
                                        color: 'white'
                                    }}>
                                        {item["title"]}</Text>
                
                                    <Text
                                    style = {{marginLeft: 10,
                                        fontFamily: "poppinsRegular",
                                        fontSize: 10,
                                        // borderWidth: 2,
                                        // borderColor: 'white',
                                        color: '#707070',
                                    }}>
                                        {item.course}{">"}Class {item.class_data}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
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
                <Text
                style = {{
                    marginLeft: 16,
                    fontFamily : "poppinsSemiBold",
                    fontSize: 18,
                    color: 'white',
                    marginBottom: 20,
                    marginTop: Platform.OS == "android" ? 10 : 0
                }}>
                    Categories
                </Text>
                <FlatList
                    style = {{
                        alignSelf: 'center'
                    }}
                    horizontal = {true}
                    data={this.state.categories}
                    renderItem={this.renderCategories}
                    keyExtractor={(item) => item.id}
                    contentInset={{ right: 16, top: 0, left: 0, bottom: 0 }}
                />
            </SafeAreaView>
        )
    }
}

export default Hompage;