import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions, TouchableOpacity, FlatList, Image, ImageBackground, Platform} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modal';

class DemoLectures extends Component {

    async componentDidMount() {
        var today = new Date();
        var tomorrow = new Date();
        var dayAfterTomorrow = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        tomorrow.setDate(today.getDate() + 1);
        dayAfterTomorrow.setDate(today.getDate() + 2);
        var ddy = String(tomorrow.getDate()).padStart(2, '0');
        var mmy = String(tomorrow.getMonth() + 1).padStart(2, '0');
        var yyyyy = tomorrow.getFullYear();

        var ddby = String(dayAfterTomorrow.getDate()).padStart(2, '0');
        var mmby = String(dayAfterTomorrow.getMonth() + 1).padStart(2, '0');
        var yyyyby = dayAfterTomorrow.getFullYear();

        today = yyyy + "-" + mm + "-" + dd;
        tomorrow = yyyyy + "-" + mmy + "-" + ddy;
        dayAfterTomorrow = yyyyby + "-" + mmby + "-" + ddby;
        console.log(today);
        console.log(tomorrow);
        console.log(dayAfterTomorrow);

        let dateArray = [...this.state.dateArray];
        dateArray.push(today);
        dateArray.push(tomorrow);
        dateArray.push(dayAfterTomorrow);
        // dateArray.push(today);
        // console.log(dateArray);
        this.setState({dateArray});
        this.setState({today: today});
        this.setState({tomorrow: tomorrow});
        this.setState({dayAfterTomorrow: dayAfterTomorrow});
        
    }

    getDaysArray = (start, end) => {
        for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt));
        }
        console.log("array" + arr);
        return arr;
    };
    
    onClickConfirm = () => {

        let dateArray = [...this.state.dateArray];
        dateArray.length = 0;
        console.log(dateArray);
        this.setState({dateArray})

        var arr = [];
        var startDate = this.state.dateFrom;
        var endDate = this.state.dateTo;
        var dateMove = new Date(startDate);
        var strDate = startDate;

        while (strDate < endDate){
            var strDate = dateMove.toISOString().slice(0,10);
            arr.push(strDate);
            dateMove.setDate(dateMove.getDate()+1);
        };

        if(!this.state.dateFrom || !this.state.dateTo){
            this.setState({
                chosen: false
            })
        }else {
            this.setState({showModal: false, chosen: true});

        }
        
        // console.log(arr);
        dateArray = [];
        // console.log(dateArray);
        arr.map((val) => {
            dateArray.push(val)
        })
        // dateArray.reverse();
        // console.log(dateArray);
        this.setState({dateArray});
        
        // console.log(this.state.dateArray);
    }

    state = {
        today: "",
        tomorrow: "",
        dayAfterTomorrow: "",
        dayAfterSeven: "",
        dateArray: [],
        dateFrom:"",
        dateTo: "",
        chosen: true,
        showModal: false,
        classes: {
                "2020-11-02": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Introduction to straight Lines", teacher: "Rohit Holani", lock: false, time: "3:48"}],  
                },
                "2020-11-01": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}],  
                },
                "2020-10-31": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}],  
                },
                "2020-10-30": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), date: "2020-10-30", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],  
                },
                "2020-10-29": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-29", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-29", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), date: "2020-10-29", date: "2020-10-29", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), date: "2020-10-29", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), date: "2020-10-29", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],  
                },
                "2020-10-28": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}], 
                },
                "2020-10-27": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), date: "2020-10-27", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), date: "2020-10-28", desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],
                },
                "2020-10-26": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],
                },
                "2020-10-25": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],
                },
                "2020-10-24": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],
                },
                "2020-10-23": {
                    _id: "5e12905eb10fe53808d1ca5a",
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],
                }
        },
    }

    render() {
        return (
            <ScrollView style = {{paddingTop: 10, backgroundColor: '#101010', height: Platform.OS == 'ios' ? '84%' : '84%'}}>
                <TouchableOpacity onPress = { () => {this.setState({showModal: true})}}>
                    <Text style = {{fontFamily: 'poppinsBold', color: '#4ACDF4', fontSize: 13, marginTop: 15, textAlign: 'right', marginRight: 20}}>Filter by</Text>
                </TouchableOpacity>
                <Modal 
                    // onBackdropPress = {() => {this.setState({showModal: false})}}
                    isVisible = {this.state.showModal}
                >
                    <View
                        style = {{
                            // flex: 1,
                            // borderColor: 'white',
                            // borderWidth: 2,
                            margin: 20,
                            // marginTop: Dimensions.get('window').height/10,
                            backgroundColor: '#101010',
                            // opacity: 0.8,
                            borderRadius: 20,
                            padding: 25,
                            width: 250,
                            height: 250,
                            alignSelf: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.75,
                            shadowRadius: 3.84,
                            elevation: 5,
                            alignItems: 'center'
                        }}
                        >  
                        <Text style = {{
                            fontFamily: 'poppinsBold',
                            fontSize: 12,
                            color: '#4ACDF4',
                            marginLeft: -125,
                            marginBottom: 10
                        }}>
                            Start Date
                        </Text>
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.dateFrom}
                            mode="date"
                            placeholder="Select Date"
                            format="YYYY-MM-DD"
                            // minDate="2020-10-23"
                            // maxDate={this.state.yesterday}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{

                                dateInput: {
                                    // marginLeft: 36,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    backgroundColor: '#1A1A1A'
                                },
                                dateText: {
                                    color: 'white',
                                    fontFamily: 'poppinsSemiBold'
                                },
                                placeholderText: {
                                    color: 'white',
                                    fontFamily: 'poppinsSemiBold'
                                }
                            }}
                            showIcon = {false}
                            onDateChange={(date) => {this.setState({dateFrom: date})}}
                        />
                        <Text style = {{
                            marginTop: 10,
                            fontFamily: 'poppinsBold',
                            fontSize: 12,
                            color: '#4ACDF4',
                            marginLeft: -125,
                            marginBottom: 10
                        }}>
                            End Date
                        </Text>
                        <DatePicker
                            style={{
                                width: 200, 
                            }}
                            date={this.state.dateTo}
                            mode="date"
                            placeholder="Select Date"
                            format="YYYY-MM-DD"
                            // minDate={this.state.today}
                            // maxDate={this.state.dayAfterSeven}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    // marginLeft: 36,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    backgroundColor: '#1A1A1A'
                                },
                                dateText: {
                                    color: 'white',
                                    fontFamily: 'poppinsSemiBold'
                                },
                                placeholderText: {
                                    color: 'white',
                                    fontFamily: 'poppinsSemiBold'
                                }
                            }}
                            showIcon = {false}
                             
                            onDateChange={(date) => {this.setState({dateTo: date})}}
                        />
                        <View>
                            {!this.state.chosen ? <Text style = {{color: "#4ACDF4", fontFamily: "poppinsSemiBold", marginTop: 5, fontSize: 10}}>Please select the dates!</Text> : null}
                            <TouchableOpacity onPress = {() => {this.onClickConfirm()}}>
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 15, 
                                    color: '#4ACDF4',
                                    marginTop: !this.state.chosen ? 10 : 25,
                                    textAlign: 'center'
                                }}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </Modal>
                {   
                    this.state.dateArray.map((val) => {

                        if(this.state.classes[val]){
                            return (
                                <View>
                                    {
                                    val == this.state.today ? <Text style = {{fontSize: 14, marginLeft: 16, width: 250, marginTop: Platform.OS == 'android' ? -25: -20, color: '#4ACDF4', fontFamily: 'poppinsBold'}}>Upcoming</Text> :
                                    val == this.state.tomorrow ? <Text style = {{fontSize: 14, marginLeft: 16, width: 250, marginTop:-25, color: '#4ACDF4', fontFamily: 'poppinsBold'}}>Tomorrow</Text> :
                                    <Text style = {{fontSize: 14, color: '#4ACDF4', marginLeft: 16, marginTop: -25, width: 250, fontFamily: 'poppinsBold'}}>{val.toString().split("-").reverse().join("-")}</Text>}
                                    <FlatList 
                                        ListHeaderComponent = {<View style = {{marginBottom: 15}}></View>}
                                        ListFooterComponent = {<View style = {{marginBottom: 40}}></View>}
                                        data = {this.state.classes[val].urlVideos}
                                        renderItem = {({item}) => {
                                            
                                            if(item != undefined) {
                                                return (
                                                    <View style = {{
                                                        flexDirection: 'row', 
                                                        // borderWidth: 2, 
                                                        // borderColor: 'white',
                                                        marginLeft: 16, 
                                                        marginRight: 16,
                                                        backgroundColor: '#1C1C1C',
                                                        marginBottom: 20,
                                                        borderRadius: 10
                                                    }}>
                                                        <View>
                                                            <ImageBackground
                                                                style = {{
                                                                    // marginTop: 20,
                                                                    // marginRight: 20,
                                                                    width: 90, 
                                                                    height: 90, 
                                                                    borderRadius: 10,
                                                                    marginBottom: 0,
                                                                    overflow: 'hidden',
                                                                    position: 'relative',
                                                                }}
                                                                source = {item.urls}
                                                            >
                                                            </ImageBackground>
                                                            </View>
                                                            <View style = {{
                                                                flex: 1,
                                                                flexShrink: 1,
                                                                justifyContent: 'space-around', 
                                                            }}>
                        
                                                                <Text style = {{
                                                                    color: 'white',
                                                                    fontFamily: 'poppinsSemiBold',
                                                                    paddingLeft: 15,
                                                                    paddingRight: 50,
                                                                    marginTop: 5,
                                                                    // borderColor: 'white',
                                                                    // borderWidth: 2,
                                                                    flexShrink: 1,
                                                                    fontSize: 10,
                                                                    height: 40
                                                                    // paddingTop:10
                                                                }}>
                                                                    {item.desc}
                                                                </Text>
                                                            <View style = {{marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
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
                                                                <TouchableOpacity 
                                                                    style = {{ 
                                                                        // borderWidth: 1, 
                                                                        // borderColor: 'white', 
                                                                        width: 70, 
                                                                        height: 25, 
                                                                        marginRight: 15,
                                                                        marginBottom: 5,
                                                                        justifyContent: 'center', 
                                                                        borderRadius: 5,
                                                                        backgroundColor: '#4ACDF4'
                                                                    }}
                                                                >
                                                                    <Text style = {{
                                                                        textAlign: 'center', 
                                                                        alignItems: 'center',
                                                                        alignSelf: 'center', 
                                                                        fontSize: 12, 
                                                                        fontFamily: 'poppinsBold', 
                                                                        color: "white"
                                                                    }}>Attend</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                )
                                                
                                            } else {
                                                return (
                                                    <View>
                                                        <Text>
                                                            Not Found
                                                        </Text>
                                                    </View>
                                                )
                                            }
                                        
                                        }
                                        }

                                        keyExtractor = {(item) => item.id}
                                    /> 
                                </View>
                            )
                        } else if(!this.state.classes[val]){

                            return(
                                <View>
                                    <Text style = {{fontSize: 14, color: '#4ACDF4', marginLeft: 16, marginBottom: 10, fontFamily: 'poppinsBold'}}>{val.toString().split("-").reverse().join("-")}</Text>
                                    <Text style = {{fontSize: 12, color: 'white', marginLeft: 16, marginBottom: 40, fontFamily: 'poppinsSemiBold'}}>No Live Classes Found</Text>
                                </View>
                            )

                        }
                    })
                }
                {/* <View style = {{marginBottom: 100}}></View> */}
                               
            </ScrollView>
        ) 
    }

}

export default DemoLectures;