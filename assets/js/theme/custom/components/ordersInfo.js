import React from 'react';

export default class OrderHeaderIncompleteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.count > 0) {
      return (
        <div>
          You have {this.props.count} incomplete orders
        </div>
      )
    } else {
      return (
        <div>
          All of your orders were completed
        </div>
      )
    }
  }
}