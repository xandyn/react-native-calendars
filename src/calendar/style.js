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
    week: {
      marginVertical: 7,
      flexDirection: 'row',
      justifyContent: 'space-around',
      ...appStyle.weekContainerStyle
    },
    weekDaysContainer: {
      marginVertical: 7,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: 13,
      color: 'white',
      opacity: 0.5,
      ...appStyle.weekDaysStyle
    },
  });
}

