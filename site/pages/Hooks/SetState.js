import React from 'react';

export default class SetState extends React.Component {
  state = { count: 10 };

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.add)}>
          Click me
        </button>
      </div>
    );
  }
}
