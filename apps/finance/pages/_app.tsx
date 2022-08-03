import React from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import type { NextPage } from 'next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { isServer } from '@finance/utils';
import { DialogConnector } from '@finance/ui';
import { store, persistor, wrapper } from '@finance/redux';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { WrapTranslate } from '../components/WrapTranslate/WrapTranslate'
import { Layout } from '../components/Layout/Layout'
import NoAccess from '../components/NoAccess/NoAccess';
import { Head } from '../components/Head/Head';

import 'rc-dialog/assets/index.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/normalize.css';

type ILayout = (page: React.ReactElement) => React.ReactNode;
type NextPageWithLayout = NextPage & {
  getLayout?: ILayout;
  isAuth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const accessToken = isServer() ? false : localStorage.accessToken;
  const CurrentComponent =
    !accessToken && Component.isAuth ? NoAccess : Component;

  const getLayout =
    CurrentComponent.getLayout
      ? CurrentComponent.getLayout as  ILayout
      : (page: React.ReactElement) => <Layout>{page}</Layout>;

  return (
    <>
      <Head />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WrapTranslate>
            <ErrorBoundary>
              {getLayout(<CurrentComponent {...pageProps} />)}

              <ToastContainer
                autoClose={4000}
                newestOnTop
                position="top-right"
              />

              <DialogConnector />
            </ErrorBoundary>
          </WrapTranslate>
        </PersistGate>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
