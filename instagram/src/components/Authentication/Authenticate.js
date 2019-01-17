import React from 'react';
import ls from 'local-storage';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount() {
      if (!ls.get('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.setState.loggedIn) return <App />;
      return <Login />;
    }
  };

export default Authenticate;
