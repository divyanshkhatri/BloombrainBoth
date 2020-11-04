import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class Test extends Component {

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 25 : 0
                }}
            >
                <Text
                    style = {{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'poppinsMedium'
                    }}
                >
                    Test Screen
                </Text>

            </SafeAreaView>
        )
    }

}

export default Test;