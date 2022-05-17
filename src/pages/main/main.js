import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native';

import {ContextStoreDefault} from '../../context/main';
import verifyIsAuth from '../../auth/verifyIsAuth';

import * as S from './main.style';

export default function Main({navigation: {navigate}}) {
  const {isAuth} = useContext(ContextStoreDefault);

  useEffect(() => {
    verifyIsAuth(isAuth, navigate);
  }, []);

  return (
    <SafeAreaView>
      <S.Header>
        <S.Subtitle>Saldo total</S.Subtitle>
        <S.Title>R$1050</S.Title>
        <S.InterativeUnderlineArea>
          <S.Underline />
        </S.InterativeUnderlineArea>
      </S.Header>
    </SafeAreaView>
  );
}
