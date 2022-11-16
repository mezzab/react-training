import React from "react";

interface Props {
  message: string
}

interface State {
  count: number
}

class CounterInfo extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default CounterInfo;
