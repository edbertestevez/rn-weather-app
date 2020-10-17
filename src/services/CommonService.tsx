import { Dimensions } from "react-native"

const CommonService = {
  isScreenSmall: ()=>{
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const isPortrait = screenHeight > screenWidth;

    return screenWidth < 320 || isPortrait;
  }
}

export default CommonService;