// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <Link
        to="/catalog"
      >
      Hello Home
      </Link>
    );
  }
}

export default Home;
