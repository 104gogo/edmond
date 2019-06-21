import React from 'react';

function connect({ mapStateToProps, mapDispatchToProps }) {
  return function(WrapedComponent) {
    class ProxyComponet extends React.Component {
      constructor(props, context) {
        super(props);
        this.store = context.store;
        this.state = mapStateToProps(this.store.getState());
      }

      componentWillMount() {
        this.store.subscribe(() =>
          this.setState(mapStateToProps(this.store.getState()))
        );
      }

      render() {
        let actions = {};
        actions = mapDispatchToProps(this.store.dispatch);
        return <WrapedComponent {...this.state} {...this.actions} />;
      }
    }

    return ProxyComponet;
  }
}

export default connect;
