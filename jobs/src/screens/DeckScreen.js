import React, { Component } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Card, Button } from 'react-native-elements';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import Swipe from '../components/Swipe';
import { likeJob } from '../actions';

class DeckScreen extends Component {
  constructor(props) {
    super(props);
    // Add locale-specific relative date/time formatting rules.
    TimeAgo.addLocale(en);
  }

  renderNoMoreCards() {
    return <Card title="No More Cards!" />;
  }

  renderCard(job) {
    const timeAgo = new TimeAgo('en-US');

    const initialRegion = {
      latitude: +job.latitude,
      longitude: +job.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={job.title}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{timeAgo.format(new Date(job.created_at))}</Text>
        </View>
        <Text>{job.description}...</Text>
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="id"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs };
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

export default connect(
  mapStateToProps,
  { likeJob }
)(DeckScreen);
