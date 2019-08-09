import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button title="Settings" type="clear" onPress={() => navigation.navigate('settings')} />
      )
    };
  };

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { company, created_at, url, latitude, longitude, title, id } = job;
      const initialRegion = {
        latitude: +latitude,
        longitude: +longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };
      return (
        <Card title={title} key={id}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{created_at}</Text>
            </View>
            <View>
              <Button
                title="Apply Now"
                buttonStyle={{ backgroundColor: '#03A9F4' }}
                onPress={() => Linking.openURL(url)}
              />
            </View>
          </View>
        </Card>
      );
    });
  }

  render() {
    return <ScrollView style={{ flex: 1, marginTop: 10 }}>{this.renderLikedJobs()}</ScrollView>;
  }
}

const mapStateToProps = state => {
  return { likedJobs: state.likedJobs };
};

const styles = {
  detailWrapper: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
};

export default connect(mapStateToProps)(ReviewScreen);
