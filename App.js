import React from 'react';
import {Button, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
function App() {
  const onLoginGoogle = async () => {};
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <GoogleSigninButton onPress={onLoginGoogle} />
    </View>
  );
}

export default App;
