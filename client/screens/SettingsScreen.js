import React, { Component } from 'react';
import { Alert, AppRegistry, TextInput, Button, StyleSheet, View } from 'react-native';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipedId: '5be728d3824f67574de33ada',
      swiperId: '5be728cb824f67574de33aa7'
    };

    this.swipeRightButton = this.swipeRightButton.bind(this);
    this.swipeLeftButton = this.swipeLeftButton.bind(this);
  }

  // static navigationOptions = {
  //   title: 'app.json',
  // };

  swipeRightButton() {
    fetch('http://localhost:5000/api/matches/swipeRightOnUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        swiperId: this.state.swiperId,
        swipedId: this.state.swipedId
      })
    }).then((response) => response.json()).then((data) => Alert.alert(data));
  }

  swipeLeftButton() {
    Alert.alert('Clicked the swipe left button');
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.swipeRightButton}
            title="Swipe right"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.swipeLeftButton}
            title="Swipe left"
            color="#841584"
          />
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});