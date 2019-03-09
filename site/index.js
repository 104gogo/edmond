import React from 'react';
import ReactDOM from 'react-dom';

class Count extends React.Component {
  state = { count: 1 };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // ?

    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count); // ?
      setTimeout(() => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count); // ?
      }, 1000);
    }, 2000);
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>{count}</div> {/* 显示 ? */}
        <button onClick={this.handleClick}>点我</button>
      </>
    );
  }
}

ReactDOM.render((
  <Count />
), document.getElementById('root'));