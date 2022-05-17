import {Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

async function signInWithGoogle() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

function signInWithApple() {
  if (!Platform.OS === 'ios') return;
  console.log('IOS');
}

export {signInWithGoogle, signInWithApple};
