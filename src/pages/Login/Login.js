import React, {useEffect, useContext} from 'react';

import * as S from './login.styled';

import {signInWithGoogle} from './function/SignIn';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {ContextStoreDefault} from '../../context/main';

export default function Login({navigation: {navigate}}) {
  const {isAuth} = useContext(ContextStoreDefault);
  console.log(isAuth);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '333395704951-g1ibjaq5653kthoaamabhb039aeso4k3.apps.googleusercontent.com',
    });
    (async () => {
      console.log(await GoogleSignin.signIn());
    })();
  }, []);

  const handlePressLoginWithGoogle = async () => {
    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    // const {idToken} = await GoogleSignin.signIn();
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // console.log(idToken);
    // const data = auth().signInWithCredential(googleCredential);
    // console.log(data);
    // signInWithGoogle().then(userData => {
    //   getUserInfo(userData);
    //   //toMainPage();
    // });
  };
  const toMainPage = () => {
    navigate('Home');
  };
  const getUserInfo = data => {
    console.log(data);
  };

  return (
    <S.Background>
      <S.Button onPress={handlePressLoginWithGoogle}>
        <S.Image />
        <S.TextButton>Entre com o Google</S.TextButton>
      </S.Button>
    </S.Background>
  );
}
