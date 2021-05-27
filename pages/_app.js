import App from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper, store, persistor } from '../redux/redux.store';

function LoginApp(props) {
  const { Component, pageProps, authInfo } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} authInfo={authInfo}/>
      </PersistGate>
    </Provider> 
  )
}

LoginApp.getInitialProps = async (appContext) => {
  const authInfo = appContext.ctx?.req?.session?.authInfo;
  const pageProps = await App.getInitialProps(appContext);
  if (authInfo)
    return { ...pageProps, authInfo }
  else
    return { ...pageProps }
}

export default wrapper.withRedux(LoginApp);