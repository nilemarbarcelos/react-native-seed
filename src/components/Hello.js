import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { helloWorld } from '../actions';

class HelloWorld extends Component {
  render() {
    const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>
          {this.props.hello}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { hello } = state.hello;
  return { hello };
};

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'blue',
    fontSize: 22
  }
};

export default connect(mapStateToProps, { helloWorld })(HelloWorld);
