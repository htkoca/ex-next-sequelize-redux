// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// redux dependencies

// react
class Page extends Component {
  static getInitialProps({ store }) {
    // this is called by the wrapper in `./pages/_app.jsx`
    // store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
    return {}; // you can pass some additional custom props to component from here
  }
  render() {
    return (
      <div>
        <div>Prop from Redux {JSON.stringify(this.props)}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
        <div>Loading status {this.props.loading}</div>
      </div>
    );
  }
}

// export react
export default connect((state) => state)(Page);
