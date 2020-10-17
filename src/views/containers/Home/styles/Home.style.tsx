import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../constants/AppColors';
import { FontSize } from '../../../../constants/FontSize';

const styles = StyleSheet.create({
	container: {
		padding: 24
	},
	name: {
		fontSize: FontSize.TITLE
	},
	link: {
    fontSize: FontSize.LARGE,
    marginBottom: 12
  },
	button: {
		width: 200,
		marginVertical: 8
	},
	logout: {
		width: 200,
		marginBottom: 24
	},
	profileImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
		borderColor: '#CACACA',
		borderWidth: 2,
		marginVertical: 12
  },
  coordinates:{
    height: 70,
    justifyContent: 'center'
  }
});

export default styles;
