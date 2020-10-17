import { StyleSheet } from "react-native";
import { FontSize } from "../../../../constants/FontSize";

const styles = StyleSheet.create({
  container:{
    padding: 24
  },
  name: {
    fontSize: FontSize.TITLE
  },
  link: {
    fontSize: FontSize.LARGE
  },
  button:{
    width: 200,
    marginVertical: 24
  }
});

export default styles;