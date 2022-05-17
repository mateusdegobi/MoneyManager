export default function verifyIsAuth(isAuthContext, navigate) {
  if (!isAuthContext) {
    navigate('Login');
  }
}
