import React from 'react';
import Homepage from './component/Homepage';
import Subject from './component/Subject';
import {useFonts} from 'expo-font';
import {Tabs, Scene, Router} from 'react-native-router-flux';
import BottomNavigator from './component/BottomNavigator';
import Live from './component/Live';
import Video from './component/Video';
import Test from './component/Test';
import Landing from './component/Landing';
import Signin from './component/Signin';
import Register from './component/Register';
import Favourite from './component/Favourite';
import Profile from './component/Profile';
import Payment from './component/Payment';
import Checkout from './component/Checkout';
import PaymentComplete from './component/PaymentComplete';
import PaymentInComplete from './component/PaymentInComplete';
import LandingMain from './component/LandingMain';
import VideoPlayer from './component/VideoPlayer';

export default function App() {

  const [loaded] = useFonts({
    poppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    poppinsLightItalic : require('./assets/fonts/Poppins-LightItalic.ttf'),
    poppinsMediumItalic : require('./assets/fonts/Poppins-MediumItalic.ttf'),
    poppinsSemiBoldItalic : require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    poppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (
    // <View>
      <Router>
        <Scene key = "root">
          <Scene type = "reset" key = "Landing" component = {Landing} title = "Landing" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} initial/>
          <Scene type = "reset" key = "LandingMain" component = {LandingMain} title = "LandingMain" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "VideoPlayer" component = {VideoPlayer} title = "VideoPlayer" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "Signin" component = {Signin} title = "Signin" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" type = "reset" key = "Payment" component = {Payment} title = "Payment" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "Checkout" component = {Checkout} title = "Checkout" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "PaymentComplete" component = {PaymentComplete} title = "PaymentComplete" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "PaymentInComplete" component = {PaymentInComplete} title = "PaymentInComplet" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "Register" component = {Register} title = "Register" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "Profile" component = {Profile} title = "Profile" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "Favourite" component = {Favourite} title = "Favourite" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null} />
          <Scene type = "reset" key = "BottomNavigator" component = {BottomNavigator} title = "BottomNavigator" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene type = "reset" key = "Homepage" component = {Homepage} title = "homepage" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene type = "reset" key = "subject" component = {Subject} title = "subject" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene type = "reset" key = "Video" component = {Video} title = "Video" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene type = "reset" key = "Test" component = {Test} title = "Test" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene type = "reset" key = "Live" component = {Live} title = "Live" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          
			{/* <Scene key =  */}

        </Scene>
       </Router>
    // </View>

  );
}