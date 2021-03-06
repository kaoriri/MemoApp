import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

class CircleButton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {children}
        </Text>
      </View>
    );
  }
}

CircleButton.propTypes = {
  children: PropTypes.element.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

export default CircleButton;
