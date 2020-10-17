import { StyleSheet } from "react-native";
import { FontSize } from "../../../../constants/FontSize";

const styles = StyleSheet.create({
  container:{
    padding: 24,
    alignItems: 'flex-start'
  },
  title:{
    fontSize: FontSize.TITLE,
    marginBottom: 20
  },
  loadingLabel:{
    fontSize: FontSize.NORMAL,
    marginLeft: 12
  }
});

export default styles;