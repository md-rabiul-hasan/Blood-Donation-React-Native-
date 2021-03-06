import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colorValue from '../../Shared/Color';
import {commonJustify, commonStyle} from '../../Shared/CommonStyle';
import fontFamily from '../../Shared/FontFamily';

const Login = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor="white" />
      <View style={styles.main}>
        {/* Logo Section */}
        <View style={[commonJustify.rowCenter, {height: '40%'}]}>
          <Image
            style={styles.image}
            source={require('../../../assets/image/login-logo.png')}
          />
        </View>

        {/* Login Form */}
        <View>
          <Input
            placeholder="Enter your email"
            leftIcon={{type: 'ant-design', name: 'mail'}}
          />
          <Input
            placeholder="Enter your password"
            leftIcon={{type: 'ant-design', name: 'lock'}}
          />
          <Button
            onPress={() => navigation.navigate('ButtomNavigation')}
            buttonStyle={{backgroundColor: colorValue.primary}}
            title="Solid Button"
          />

          {/* Forget Password */}
          <View style={commonJustify.rowCenter}>
            <TouchableOpacity>
              <Text
                style={[
                  commonStyle({
                    fontSize: 14,
                    fontFamily: fontFamily.PoppinsMedium,
                    color: colorValue.primary,
                  }).text,
                  {margin: 10},
                ]}>
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{position: 'absolute', bottom: 40, width: '100%'}}>
        <View style={commonJustify.rowCenter}>
          <TouchableOpacity>
            <Text>Don't have an account? </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
            <Text
              style={
                commonStyle({
                  fontSize: 14,
                  fontFamily: fontFamily.PoppinsMedium,
                  color: colorValue.primary,
                }).text
              }>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});

export default Login;
