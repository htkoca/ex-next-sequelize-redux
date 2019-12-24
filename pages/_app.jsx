// dependencies
import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';

// redux dependencies
import { makeStore } from '@/redux/store';
import { getInitialState } from '@/redux/actions';

// react
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    await ctx.store.dispatch(getInitialState(ctx.req.headers.host));
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

// export react
export default withRedux(makeStore)(MyApp);
