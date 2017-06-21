import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      ...appStyle.dayContainerStyle,
    },
    text: {
      fontSize: 15,
      color: 'white',
      backgroundColor: 'transparent',
      ...appStyle.dayTextStyle,
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 50,
      ...appStyle.selectedDayStyle,
    },
    todayText: {
      ...appStyle.todayTextStyle,
    },
    selectedText: {
      ...appStyle.selectedTextStyle,
    },
    disabledText: {
      ...Platform.select({
        ios: { opacity: 0.5 },
        android: { opacity: 0.35 },
      }),
      ...appStyle.disabledTextStyle,
    },
    otherMonthText: {
      ...Platform.select({
        ios: { opacity: 0.5 },
        android: { opacity: 0.35 },
      }),
    },
    dot: {
      position: 'absolute',
      opacity: 0,
      width: 5,
      height: 5,
      bottom: 8,
      backgroundColor: 'transparent',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    visibleDot: {
      opacity: 1,
      ...appStyle.dotStyle,
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    }
  });
}
