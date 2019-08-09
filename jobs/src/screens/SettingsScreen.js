import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 10
        }}
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Reset Liked Jobs"
            icon={{ name: 'delete-forever' }}
            buttonStyle={{ backgroundColor: '#F44336', height: 60 }}
            onPress={this.props.clearLikedJobs}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    top: 10
  }
};

export default connect(
  null,
  { clearLikedJobs }
)(SettingsScreen);
