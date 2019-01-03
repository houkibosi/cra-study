import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        return <main>{this.props.children}</main>;
    }
  }

  export default Content;
