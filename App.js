import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      secretData: []
    };
  }


  componentDidMount() {
    var tempArray50 = []
    var tempArray12 = []

    for (let i = 1; i <= 50; i++) {
      tempArray50.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      tempArray12.push(i)
    }
    this.setState({ data: tempArray50, secretData: tempArray12 })


  }

  shuffle = (array) => {

    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  MIX = () => {
    this.setState({ data: this.shuffle(this.state.data) })
  }

  secretNumbers = (array) => {
    let one = array[0]
    let two = array[1]

    return (
      <View style={styles.container}>
        <View style={styles.secretNumberContainer}>
          <Text style={styles.secretItemText}>
            {one}
          </Text>
        </View>
        <View style={styles.secretNumberContainer}>
          <Text style={styles.secretItemText}>
            {two}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    let section1 = this.state.data.slice(0, 5)
    let section2 = this.state.data.slice(5, 10)
    let section3 = this.state.data.slice(10, 15)
    let section4 = this.state.data.slice(15, 20)
    let section5 = this.state.data.slice(20, 25)
    let section6 = this.state.data.slice(25, 30)
    let section7 = this.state.data.slice(30, 35)
    let section8 = this.state.data.slice(35, 40)
    let section9 = this.state.data.slice(45, 50)

    return (
      <View style={styles.ViewContainer}>


        <View style={styles.container}>
          {section1.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section2.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section3.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>
            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section4.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section5.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section6.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section7.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section8.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <View style={styles.container}>
          {section9.map((number) => {
            return (

              <View style={styles.numberContainer}>
                <Text style={styles.itemText}>
                  {number}
                </Text>
              </View>

            )
          })}
          <View>
            {this.secretNumbers(this.shuffle(this.state.secretData))}
          </View>
        </View>
        <TouchableOpacity onPress={this.MIX} activeOpacity={0.8}>
          <View style={styles.startButton}>
            <Text style={styles.itemText}>
              Shuffle!
            </Text>

          </View>
        </TouchableOpacity>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  ViewContainer: {
    alignContent: 'center',
    backgroundColor: "#000",
    paddingVertical: 70
  },
  container: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    borderRadius: 10,
    height: 45,
    width: 45,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2
  },
  secretNumberContainer: {
    borderRadius: 25,
    height: 45,
    width: 45,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    borderWidth: 3,
  },
  startButton: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000",
    color: "#FFF",
    width: 150,
    height: 70,
    alignSelf: 'center',
    marginTop: 20
  },
  item: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  secretItemText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});