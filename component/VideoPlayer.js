import React, {Component} from 'react';
import {View, Text, SafeAreaView, BackHandle, Image, Dimensions, TouchableOpacity, FlatList, ImageBackground} from 'react-native';

import {Actions} from 'react-native-router-flux';
import { Video } from 'expo-av';

class VideoPlayer extends Component {
    
    componentDidMount() {
        this.setState({currId: this.props.titlePage.id})
    }

    state = {
        currId: "",
    }

    render() {
        console.log(this.props.videos)
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    // alignItems: "center",
                    paddingTop: Platform.OS === 'android' ? 40 : 0
                }}
            >
                <View style = {{marginBottom: 40}}>
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
                    onPress = { () => {Actions.Homepage()} }
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
                    >Video</Text>
                </View>

                <Video
                    source={{ uri: this.props.titlePage.video_url }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay = {true}
                    usePoster = {true}
                    style={{ marginTop: 20, width: Dimensions.get('window').width, height: 9*Dimensions.get('window').width/16, borderRadius: 10 }}
                    useNativeControls = {true}
                    
                />

                <Text style = {{marginTop: 20, marginLeft: 20, color: "white", fontFamily: "poppinsBold", fontSize: 18, alignItems: 'center'}}>{this.props.titlePage.title}</Text>    
                <View>
                    <View style = {{justifyContent: 'space-between', flexDirection: 'row', margin: 20}}>
                        <View style = {{flexDirection: 'row'}}>
                            <Image source = {require('../images/faculty.png')} style = {{width: 28.95, height: 23.16, marginRight: 8}}/>
                            <View>    
                                <Text style = {{color: "white", fontFamily: "poppinsMedium", fontSize: 9}}>Faculty</Text> 
                                <Text style = {{color: "white", fontFamily: "poppinsBold", fontSize: 10}}>{this.props.titlePage.teacher_name}</Text> 
                            </View>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <Image source = {require('../images/grade.png')} style = {{width: 19.44, height: 22.22, marginRight: 8}}/>
                            <View>
                                <Text style = {{color: "white", fontFamily: "poppinsMedium", fontSize: 9}}>Class</Text> 
                                <Text style = {{color: "white", fontFamily: "poppinsBold", fontSize: 10}}>Class {this.props.titlePage.class_data}</Text> 
                            </View>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <Image source = {require('../images/subject.png')} style = {{width: 16.87, height: 24,  marginRight: 8}}/>
                            <View>
                                <Text style = {{color: "white", fontFamily: "poppinsMedium", fontSize: 9}}>Subject</Text> 
                                <Text style = {{color: "white", fontFamily: "poppinsBold", fontSize: 10}}>{this.props.titlePage.course}</Text> 
                            </View>
                        </View>
                    </View>  
                </View>
                <View style = {{margin: 20}}>
                    <Text style = {{color: '#4ACDF4', fontFamily: "poppinsBold", fontSize: 14, marginBottom: 20,}}>
                        Up Next
                    </Text>
                    <View>
                    <FlatList
                        style = {{height: '57%'}}
                        data = {this.props.videos}
                        renderItem = {({item}) => {
                            if(item["id"] !== this.state.currId)
                            return (
                                <TouchableOpacity onPress = {() => {
                                    Actions.pop();
                                    Actions.push('VideoPlayer',{titlePage: item, videos: this.props.videos} );
                                }}>
                                    <View style = {{
                                        flexDirection: 'row', 
                                        // borderWidth: 2, 
                                        // borderColor: 'white',
                                        // marginLeft: 16, 
                                        // marginRight: 16,
                                        backgroundColor: '#1C1C1C',
                                        marginBottom: 20,
                                        borderRadius: 10
                                    }}>
                                        <View>
                                            <ImageBackground
                                                style = {{
                                                    // marginTop: 20,
                                                    // marginRight: 20,
                                                    width: 150, 
                                                    height: 100, 
                                                    borderRadius: 10,
                                                    marginBottom: 0,
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                }}
                                                source = {{uri: item["thumbnail_url"]}}
                                            >
                                                <Text 
                                            style = {{
                                                color: 'white', 
                                                backgroundColor: 'black',
                                                position: 'absolute',
                                                bottom: 10,
                                                fontFamily: 'poppinsRegular',
                                                fontSize: 10,
                                                right: 10,
                                                // borderRadius: 3,
                                                overflow: 'hidden',
                                                paddingLeft: 2,
                                                paddingRight: 2,
                                        }}>
                                        {item["video_duration"].toString().split(".")[0]}:{Math.round(("0."+item["video_duration"].toString().split(".")[1])*60)}
                                        </Text>
                                            </ImageBackground>
                                            </View>
                                            <View style = {{
                                                flexShrink: 1,
                                                justifyContent: 'space-around', 
                                            }}>
        
                                                <Text style = {{
                                                    color: 'white',
                                                    fontFamily: 'poppinsSemiBold',
                                                    paddingLeft: 12,
                                                    paddingRight: 50,
                                                    borderColor: 'white',
                                                    borderWidth: 2,
                                                    flexShrink: 1,
                                                    fontSize: 13,
                                                    // paddingTop:10
                                                }}>
                                                    {item["description"]}
                                                </Text>
                                            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <Text style = {{
                                                    color: 'white',
                                                    fontFamily: 'poppinsSemiBold',
                                                    paddingLeft: 12,
                                                    paddingRight: 12,
                                                            // borderColor: 'white',
                                                            // borderWidth: 2,
                                                    flexShrink: 1,
                                                    fontSize: 10,
                                                    // paddingTop: 29
                                                }}>
                                                    {item.date}
                                                </Text>
                                                
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                            }
                        }    
                    />
                    </View>
                </View>
                </View>
            </SafeAreaView>
        )
    }

}

export default VideoPlayer;