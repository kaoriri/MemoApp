import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View styles={styles.memoHeader}>
            <View>
              <Text styles={styles.memoHeaderTitle}>講座のアイデア</Text>
              <Text styles={styles.memoHeaderDate}>2017/12/12</Text>
            </View>
          </View>
        </View>

        <View styles={styles.memoContent}>
          <Text>
            講座のアイデアです。
          </Text>
        </View>

        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    fontSize: 12,
    color: '#fff',
  },
});


export default MemoDetailScreen;
