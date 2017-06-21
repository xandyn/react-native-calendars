import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1,
      backgroundColor: 'transparent',
      ...appStyle.calendarContainerStyle
    },

  });
}

