import { StyleSheet } from 'react-native';

const flexStyles = StyleSheet.create({
    row:{
      flexDirection: 'row'
    },
    row_center:{
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    flex_center:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    center:{
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export { 
  flexStyles
}