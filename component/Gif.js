import React, {Component} from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Gif extends Component {

    state = {
        email: "",
        time: Platform.OS == "android" ? 2800 : 3500,
        interest: 'false'
    }

    componentDidMount() {
        AsyncStorage.getItem('email')
        .then((value) => {
            if(value) {
                console.log("email" + value);
                this.setState({email: value})
            }
            else {
            }
        })
        AsyncStorage.getItem('interest')
        .then((value) => {
            if(value) {
                console.log("interest" + value);
                this.setState({interest: value})
            }
            else {
            }
        })
        setTimeout(() => {
            if(this.state.email == "") {
                Actions.LandingMain();
            } else if(this.state.interest === 'false') {
                console.log(this.state.interest)
                Actions.Favourite();
            } else if(this.state.interest === 'true' && this.state.email != "") {
                Actions.Homepage();
            }
        }, this.state.time);
    }

    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../images/Bloom-Brain.gif")} style={{width: 300, height: 300}} />
            </View>
        )
    }
}

export default Gif;